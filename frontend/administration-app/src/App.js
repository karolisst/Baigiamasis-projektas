import { Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import Protected from "./components/Protected";
import { HomePage } from "./components/HomePage";
import { UserList } from "./components/UserList";
import { NewUser } from "./components/NewUser";
import { StyledMainSection } from "./styles/StyledApp";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <StyledMainSection>
      <NavBar onLogout={handleLogout} />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <Protected isLoading={isLoading} setIsLoading={setIsLoading} />
          }
        >
          <Route path="/" element={<HomePage />} />
          <Route path="/registeredusers" element={<UserList />} />
          <Route path="/newuser" element={<NewUser />} />
        </Route>
      </Routes>
    </StyledMainSection>
  );
}

export default App;

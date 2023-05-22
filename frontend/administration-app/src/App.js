import "./App.css";
import { Routes, Route } from "react-router-dom";
import React, { useContext, useState } from "react";
import { AuthenticationContext } from "./components/AuthenticationContext";
import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { NavBar } from "./components/NavBar";
import Protected from "./components/Protected";
import { HomePage } from "./components/HomePage";

function App() {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [isLoading, setIsLoading] = useState(true);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsSignedIn(false);
  };

  return (
    <>
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
        </Route>
      </Routes>
    </>
  );
}

export default App;

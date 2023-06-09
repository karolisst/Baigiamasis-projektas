import { useContext, useEffect } from "react";
import { Outlet, Navigate, useNavigate, useLocation } from "react-router-dom";
import { AuthenticationContext } from "./AuthenticationContext";
import axios from "axios";

const Protected = ({ isLoading, setIsLoading }) => {
  const { isSignedIn, setIsSignedIn } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/token/verify", {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((response) => {
        if (response.data.id) {
          setIsSignedIn(true);
          navigate(location.pathname);
          setIsLoading(false);
        }
      });
  }, [location.pathname, navigate, setIsLoading, setIsSignedIn]);

  if (isLoading) {
    return <Navigate to="/login" />;
  }

  if (!isSignedIn) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
};

export default Protected;

import { useContext } from "react";
import React from "react";
import { Nav, NavLink, NavMenu, NavBtnLink } from "../styles/StyledNavBar";
import { AuthenticationContext } from "./AuthenticationContext";

export const NavBar = ({ isLoading, onLogout }) => {
  const { isSignedIn } = useContext(AuthenticationContext);

  if (isLoading) {
    return;
  }

  return (
    <Nav>
      {isSignedIn ? (
        <>
          <NavLink to="/">
            {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
          </NavLink>
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/newparticipant">New event participants</NavLink>
            <NavLink to="/registeredparticipant">
              Registered participant
            </NavLink>
            {isSignedIn && <NavBtnLink onClick={onLogout}>Logout</NavBtnLink>}
          </NavMenu>
        </>
      ) : (
        <NavMenu>
          <NavLink to="/">
            {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
          </NavLink>
          <NavLink to="/register">Register</NavLink>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavMenu>
      )}
    </Nav>
  );
};

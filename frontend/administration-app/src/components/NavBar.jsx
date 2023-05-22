import { useContext } from "react";
import React from "react";
import { Nav, NavLink, NavMenu, NavBtnLink, Img } from "../styles/StyledNavBar";
import { AuthenticationContext } from "./AuthenticationContext";
import logo from "../assets/logo.svg";

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
            <Img src={logo} alt="logo" />
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
        <>
          <NavLink to="/">
            <Img src={logo} alt="logo" />
          </NavLink>
          <NavMenu>
            <NavLink to="/register">Register</NavLink>
            <NavBtnLink to="/login">Login</NavBtnLink>
          </NavMenu>
        </>
      )}
    </Nav>
  );
};

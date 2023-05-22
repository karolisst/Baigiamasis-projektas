import React from "react";
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "../styles/StyledNavBar";

export const NavBar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          {/* <img src={require("../../images/logo.svg")} alt="logo" /> */}
        </NavLink>
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/newparticipant">New event participants</NavLink>
          <NavLink to="/registeredparticipant">Registered participant</NavLink>
        </NavMenu>
        <NavBtn>
          <NavLink to="/register">Register</NavLink>
          <NavBtnLink to="/login">Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

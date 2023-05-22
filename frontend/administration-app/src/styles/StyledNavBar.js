import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: #005073;
  height: 80px;
  display: flex;
  justify-content: end;
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 5%;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: #189ad3;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  border: none;
  text-decoration: none;
`;

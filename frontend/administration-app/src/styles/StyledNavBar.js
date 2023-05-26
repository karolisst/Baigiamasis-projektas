import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
  background: rgb(36, 36, 36);
  background: linear-gradient(
    135deg,
    rgba(36, 36, 36, 1) 19%,
    rgba(83, 83, 83, 1) 86%
  );
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 5%;
`;

export const Img = styled.img`
  width: 200px;
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
  justify-content: flex-end;
`;

export const NavBtnLink = styled(Link)`
  border-radius: 20px;
  background: #7fc67e;
  padding: 10px 25px;
  color: #333333;
  outline: none;
  border: none;
  text-decoration: none;
`;

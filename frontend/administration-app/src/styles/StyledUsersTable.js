import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const TableContainer = styled.table`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const HeaderWrapper = styled.thead`
  background-color: #1b1b1b;
  border-radius: 30px 30px 0 0;
  padding: 20px 30px 20px 30px;
`;

export const BodyWrapper = styled.tbody`
  background-color: #333333;
  padding: 10px 30px 20px 30px;
  border-radius: 0 0 30px 30px;
`;

export const TrElement = styled.tr`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const ThElement = styled.th`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: #7fc67e;
  font-size: 18px;
  font-weight: bold;
`;

export const TdElement = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: white;
  font-size: 16px;
  padding: 5px 0;
`;

export const ThLastElement = styled.th`
  width: 20%;
`;

export const TdLastElement = styled.td`
  width: 20%;
  padding: 5px 0;
`;

export const ThFirstElement = styled.th`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  color: #7fc67e;
  font-size: 18px;
`;

export const TdFirstElement = styled.td`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 40%;
  padding: 5px 0;
  color: white;
  font-size: 16px;
`;

export const DeleteButton = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
`;

export const Img = styled.img`
  width: 18px;
  cursor: pointer;
`;

export const UsersSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0px;
`;

export const H1Element = styled.h1`
  color: #7fc67e;
  margin-bottom: 30px;
`;

export const NewUserButton = styled(Link)`
  padding: 15px 70px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  background-color: #333333;
  color: #7fc67e;
  cursor: pointer;
  text-decoration: none;
`;

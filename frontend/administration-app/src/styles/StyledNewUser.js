import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const AddUserContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 60px 0 0 0;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  box-shadow: #70a870a1 0px 0px 20px 10px;
  border-radius: 30px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  padding: 5px 20px;
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  color: white;
`;

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333333;
  padding: 20px;
  border-radius: 0px 0px 30px 30px;
`;

export const InputElement = styled.input`
  width: 100%;
  margin: 5px 5px;
  padding: 10px 8px;
  border: 0;
  border-radius: 100px;
  background-color: #eeeeee;
`;

export const ButtonElement = styled.button`
  width: 30%;
  margin: 20px 0 5px 0;
  background-color: #7fc67e;
  padding: 10px;
  border: 0;
  border-radius: 100px;
  color: #333333;
  cursor: pointer;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  background-color: #ffc8c8;
  border: 2px solid #e23636;
  border-radius: 50px;
  color: #e23636;
  padding: 5px 30px;
  text-align: center;
`;

export const Img = styled.img`
  width: 20px;
`;

export const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 20px;
  background-color: #7fc67e;
  border: 2px solid #234d22;
  border-radius: 50px;
  color: #234d22;
  padding: 5px 30px;
  text-align: center;
`;

export const AllUserButton = styled(Link)`
  margin-bottom: 10px;
  padding: 15px 70px;
  font-size: 18px;
  border: none;
  border-radius: 50px;
  background-color: #333333;
  color: #7fc67e;
  cursor: pointer;
  text-decoration: none;
  margin: 60px 0px;
`;

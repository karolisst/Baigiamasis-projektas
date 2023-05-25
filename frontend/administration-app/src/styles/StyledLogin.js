import { Link } from "react-router-dom";
import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 65vh;
  width: 60%;
  margin: 0 auto;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 5px 5px;
  padding: 10px 8px;
  border: 0;
  border-radius: 100px;
  background-color: #eeeeee;
`;

export const StyledButton = styled.button`
  width: 30%;
  margin: 25px 0 5px 0;
  background-color: #7fc67e;
  padding: 10px;
  border-radius: 100px;
  color: #333333;
  cursor: pointer;
  outline: 10px solid #7fc67e61;
  border: none;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 40%;
  background-color: #333333;
  padding: 10px 40px;
  border-radius: 0 0 30px 0;
  height: 100%;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #1b1b1b;
  width: 100%;
  border-radius: 30px 30px 0px 0px;
  color: white;
  padding: 10px 0;
`;

export const MainBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const Error = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
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

export const StyledCreateAcc = styled(Link)`
  margin-top: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  color: #fff;
  text-decoration: none;
  padding-bottom: 10px;
`;

export const StyledSideDiv = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 60%;
  height: 100%;
  background-color: #333333;
  border-radius: 0 0 0 30px;
  padding: 10px 0;
`;

export const StyledSideDivImg = styled.img`
  width: 90%;
`;

import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 50vh;
`;

export const StyledInput = styled.input`
  width: 100%;
  margin: 5px 5px;
  padding: 10px 8px;
  border: 0;
  border-radius: 100px;
  background-color: #71c7ec;
`;

export const StyledButton = styled.button`
  width: 50%;
  margin: 5px 0px;
  background-color: #005073;
  padding: 10px;
  border: 0;
  border-radius: 100px;
  color: white;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #189ad3;
  padding: 20px;
  border-radius: 0px 0px 7.5px 7.5px;
`;

export const StyledHeader = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #005073;
  padding: 5px 20px;
  width: 100%;
  border-radius: 7.5px 7.5px 0px 0px;
  color: white;
`;

export const MainBox = styled.div`
  width: 500px;
`;

export const Error = styled.div`
  background-color: #f09292;
  border: 1px solid red;
  border-radius: 6px;
  color: red;
  padding: 6px 0;
  text-align: center;
`;

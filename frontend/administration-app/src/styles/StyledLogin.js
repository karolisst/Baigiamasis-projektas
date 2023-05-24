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
  background-color: #eeeeee;
`;

export const StyledButton = styled.button`
  width: 30%;
  margin: 20px 0 5px 0;
  background-color: #7fc67e;
  padding: 10px;
  border: 0;
  border-radius: 100px;
  color: #333333;
  cursor: pointer;
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #333333;
  padding: 20px;
  border-radius: 0px 0px 30px 30px;
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

export const MainBox = styled.div`
  width: 500px;
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

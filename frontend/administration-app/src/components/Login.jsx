import { useState } from "react";
import {
  MainBox,
  StyledHeader,
  LoginContainer,
  StyledInput,
  StyledButton,
  StyledForm,
  Error,
  Img,
  StyledCreateAcc,
  StyledSideDiv,
  StyledSideDivImg,
} from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { AuthenticationContext } from "./AuthenticationContext";
import errorImg from "../assets/error.svg";
import arrow from "../assets/arrow.svg";
import picture from "../assets/picture.svg";

export const Login = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/login", formData)
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          setIsSignedIn(true);
          navigate("/");
        } else {
          setError(response.data.message);
        }
      })
      .catch((err) => console.log(err));
  };

  const handleOnChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <LoginContainer>
      <StyledHeader>
        <h2>
          <b>Login</b>
        </h2>
      </StyledHeader>
      <MainBox>
        <StyledSideDiv>
          <StyledSideDivImg src={picture} alt="picture" />
        </StyledSideDiv>
        <StyledForm onSubmit={handleOnSubmit}>
          <StyledInput
            name="email"
            onChange={handleOnChange}
            type="email"
            placeholder="Email"
          />
          <StyledInput
            name="password"
            onChange={handleOnChange}
            type="password"
            placeholder="*********"
          />
          <StyledButton className="btn">Login</StyledButton>
          {error && (
            <Error>
              <Img src={errorImg} alt="error" />
              {error}
            </Error>
          )}
          <StyledCreateAcc to="/register">
            Create Your Account <Img src={arrow} alt="arrow" />
          </StyledCreateAcc>
        </StyledForm>
      </MainBox>
    </LoginContainer>
  );
};

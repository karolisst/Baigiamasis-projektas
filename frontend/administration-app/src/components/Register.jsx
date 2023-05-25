import { useState, useContext } from "react";
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
} from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthenticationContext } from "./AuthenticationContext";
import errorImg from "../assets/error.svg";
import arrow from "../assets/arrow.svg";

export const Register = () => {
  const { setIsSignedIn } = useContext(AuthenticationContext);
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (!name || !surname || !email || !password) {
      setError("Please fill in all fields");
      return;
    }

    const formData = {
      name: name,
      surname: surname,
      email: email,
      password: password,
    };

    try {
      const response = await axios.get(
        `http://localhost:8000/check-administrators-email/${email}`
      );
      if (response.data.exists) {
        setError(`Email is invalid or already taken`);
      } else {
        await axios.post("http://localhost:8000/register", formData);
        handleLogin(formData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogin = (formData) => {
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

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <LoginContainer>
      <MainBox>
        <StyledHeader>
          <h2>
            <b>Registration Form</b>
          </h2>
        </StyledHeader>
        <StyledForm onSubmit={handleOnSubmit}>
          <StyledInput
            name="name"
            type="text"
            placeholder="Name"
            value={name}
            onChange={onNameChange}
          />
          <StyledInput
            name="surname"
            type="text"
            placeholder="Surname"
            value={surname}
            onChange={onSurnameChange}
          />
          <StyledInput
            name="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={onEmailChange}
          />
          <StyledInput
            name="password"
            type="password"
            placeholder="*********"
            value={password}
            onChange={onPasswordChange}
          />
          <StyledButton className="btn" type="submit">
            Register
          </StyledButton>
          {error && (
            <Error>
              <Img src={errorImg} alt="logo" />
              {error}
            </Error>
          )}
          <StyledCreateAcc to="/login">
            Already have an account?<strong>Login</strong>
            <Img src={arrow} alt="logo" />
          </StyledCreateAcc>
        </StyledForm>
      </MainBox>
    </LoginContainer>
  );
};

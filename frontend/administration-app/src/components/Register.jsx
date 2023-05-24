import {
  MainBox,
  StyledHeader,
  LoginContainer,
  StyledInput,
  StyledButton,
  StyledForm,
  Error,
  Img,
} from "../styles/StyledLogin";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import errorImg from "../assets/error.svg";

export const Register = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onHandleSubmit = (e) => {
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

    axios
      .post("http://localhost:8000/register", formData)
      .then((response) => {
        navigate("/login");
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
        <StyledForm onSubmit={onHandleSubmit}>
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
        </StyledForm>
      </MainBox>
    </LoginContainer>
  );
};

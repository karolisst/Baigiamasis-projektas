import { useState } from "react";
import axios from "axios";
import {
  ButtonElement,
  Error,
  FormContainer,
  Img,
  InputElement,
  MainBox,
  StyledHeader,
  AddUserContainer,
  AllUserButton,
  SuccessMessage,
} from "../styles/StyledNewUser";
import errorImg from "../assets/error.svg";
import successImg from "../assets/success.svg";

export const NewUser = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [isFormValid, setIsFormValid] = useState(true);

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (
      form.name === "" ||
      form.surname === "" ||
      form.email === "" ||
      form.phone_number === ""
    ) {
      setIsFormValid(false);
      return;
    }

    axios
      .post("http://localhost:8000/users", form)
      .then((res) => {
        console.log(res);
        setForm({
          name: "",
          surname: "",
          email: "",
          phone_number: "",
        });
        setIsFormValid(true);
        setSuccessMessage("User successfully added");
      })
      .catch((err) => console.log(err));
  };

  return (
    <AddUserContainer>
      {successMessage && (
        <SuccessMessage>
          <Img src={successImg} alt="logo" />
          {successMessage}
        </SuccessMessage>
      )}
      <MainBox>
        <StyledHeader>
          <h2>
            <b>Enter new participant information</b>
          </h2>
        </StyledHeader>
        <FormContainer onSubmit={handleOnSubmit}>
          <InputElement
            name="name"
            type="text"
            placeholder="Name"
            onChange={handleOnChange}
            value={form.name}
          />
          <InputElement
            name="surname"
            type="text"
            placeholder="Surname"
            onChange={handleOnChange}
            value={form.surname}
          />
          <InputElement
            name="email"
            type="text"
            placeholder="Email"
            onChange={handleOnChange}
            value={form.email}
          />
          <InputElement
            name="phone_number"
            type="text"
            placeholder="Phone Number"
            onChange={handleOnChange}
            value={form.phone_number}
          />
          <ButtonElement variant="primary" type="submit">
            Add User
          </ButtonElement>
          {!isFormValid && (
            <Error>
              <Img src={errorImg} alt="logo" />
              Please fill in all fields
            </Error>
          )}
        </FormContainer>
      </MainBox>
      <AllUserButton to="/registeredusers">
        View all registered participants
      </AllUserButton>
    </AddUserContainer>
  );
};

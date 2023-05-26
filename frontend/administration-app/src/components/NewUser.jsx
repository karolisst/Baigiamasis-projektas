import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
} from "../styles/StyledNewUser";
import errorImg from "../assets/error.svg";

export const NewUser = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

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
      .get(`http://localhost:8000/check-user-email/${form.email}`)
      .then((response) => {
        if (response.data.exists) {
          setIsFormValid(false);
          setErrorMessage("User with this email already exists");
        } else {
          axios
            .post("http://localhost:8000/users", form)
            .then(() => {
              setForm({
                name: "",
                surname: "",
                email: "",
                phone_number: "",
              });
              setIsFormValid(true);
              setErrorMessage("");
              toast.success("User successfully added", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <AddUserContainer>
      <ToastContainer />
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
              <Img src={errorImg} alt="error" />
              {errorMessage || "Please fill in all fields"}
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

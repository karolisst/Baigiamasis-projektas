import { useState } from "react";
import axios from "axios";

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
    <>
      <p>{successMessage}</p>
      <form onSubmit={handleOnSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleOnChange}
          value={form.name}
        />
        <input
          name="surname"
          type="text"
          placeholder="surname"
          onChange={handleOnChange}
          value={form.surname}
        />
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleOnChange}
          value={form.email}
        />
        <input
          name="phone_number"
          type="text"
          placeholder="phone_number"
          onChange={handleOnChange}
          value={form.phone_number}
        />
        <button variant="primary" type="submit">
          Add User
        </button>
      </form>
      {!isFormValid && <p>All fields must be filled</p>}
    </>
  );
};

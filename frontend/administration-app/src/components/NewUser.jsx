import { useState } from "react";
import axios from "axios";

export const NewUser = () => {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    email: "",
    phone_number: "",
  });

  const handleOnChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/users", form)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <input
          name="name"
          type="text"
          placeholder="name"
          onChange={handleOnChange}
        />
        <input
          name="surname"
          type="text"
          placeholder="surname"
          onChange={handleOnChange}
        />
        <input
          name="email"
          type="text"
          placeholder="email"
          onChange={handleOnChange}
        />
        <input
          name="phone_number"
          type="text"
          placeholder="phone_number"
          onChange={handleOnChange}
        />
        <button variant="primary" type="submit">
          Add User
        </button>
      </form>
    </>
  );
};

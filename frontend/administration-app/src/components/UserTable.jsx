import { useState, useEffect } from "react";
import axios from "axios";
import {
  BodyWrapper,
  DeleteButton,
  HeaderWrapper,
  Img,
  TableContainer,
  TdElement,
  TdFirstElement,
  TdLastElement,
  ThElement,
  ThFirstElement,
  ThLastElement,
  TrElement,
} from "../styles/StyledUsersTable";
import logo from "../assets/trash.svg";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("http://localhost:8000/users")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDeleteUser = (userId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (confirmed) {
      axios
        .delete(`http://localhost:8000/users/${userId}`)
        .then((response) => {
          console.log(response.data);
          setDeleteUser(true);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    if (deleteUser) {
      fetchUsers();
      setDeleteUser(false);
    }
  }, [deleteUser]);

  return (
    <TableContainer>
      <HeaderWrapper>
        <TrElement>
          <ThFirstElement>ID</ThFirstElement>
          <ThElement>Name</ThElement>
          <ThElement>Surname</ThElement>
          <ThElement>Email</ThElement>
          <ThElement>Phone Number</ThElement>
          <ThLastElement></ThLastElement>
        </TrElement>
      </HeaderWrapper>
      <BodyWrapper>
        {users.map((user) => (
          <TrElement key={user.id}>
            <TdFirstElement>{user.id}</TdFirstElement>
            <TdElement>{user.name}</TdElement>
            <TdElement>{user.surname}</TdElement>
            <TdElement>{user.email}</TdElement>
            <TdElement>{user.phone_number}</TdElement>
            <TdLastElement>
              <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                <Img src={logo} alt="logo" />
              </DeleteButton>
            </TdLastElement>
          </TrElement>
        ))}
      </BodyWrapper>
    </TableContainer>
  );
};

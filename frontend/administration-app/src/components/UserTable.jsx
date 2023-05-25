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
import trash from "../assets/trash.svg";
import edit from "../assets/edit.svg";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");

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

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setEditedName(user.name);
    setEditedSurname(user.surname);
    setEditedEmail(user.email);
    setEditedPhoneNumber(user.phone_number);
  };

  const handleSaveChanges = () => {
    const updatedUser = {
      id: editingUserId,
      name: editedName,
      surname: editedSurname,
      email: editedEmail,
      phone_number: editedPhoneNumber,
    };

    axios
      .put(`http://localhost:8000/users/${editingUserId}`, updatedUser)
      .then((response) => {
        console.log(response.data);
        setEditingUserId(null);
        setEditedName("");
        setEditedSurname("");
        setEditedEmail("");
        setEditedPhoneNumber("");
        fetchUsers();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelEdit = () => {
    setEditingUserId(null);
    setEditedName("");
    setEditedSurname("");
    setEditedEmail("");
    setEditedPhoneNumber("");
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
            {editingUserId === user.id ? (
              <>
                <TdFirstElement>{user.id}</TdFirstElement>
                <TdElement>
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                </TdElement>
                <TdElement>
                  <input
                    type="text"
                    value={editedSurname}
                    onChange={(e) => setEditedSurname(e.target.value)}
                  />
                </TdElement>
                <TdElement>
                  <input
                    type="text"
                    value={editedEmail}
                    onChange={(e) => setEditedEmail(e.target.value)}
                  />
                </TdElement>
                <TdElement>
                  <input
                    type="text"
                    value={editedPhoneNumber}
                    onChange={(e) => setEditedPhoneNumber(e.target.value)}
                  />
                </TdElement>
                <TdLastElement>
                  <button onClick={handleSaveChanges}>Save</button>
                  <button onClick={handleCancelEdit}>Cancel</button>
                </TdLastElement>
              </>
            ) : (
              <>
                <TdFirstElement>{user.id}</TdFirstElement>
                <TdElement>{user.name}</TdElement>
                <TdElement>{user.surname}</TdElement>
                <TdElement>{user.email}</TdElement>
                <TdElement>{user.phone_number}</TdElement>
                <TdLastElement>
                  <DeleteButton onClick={() => handleEditUser(user)}>
                    <Img src={edit} alt="logo" />
                  </DeleteButton>
                  <DeleteButton onClick={() => handleDeleteUser(user.id)}>
                    <Img src={trash} alt="logo" />
                  </DeleteButton>
                </TdLastElement>
              </>
            )}
          </TrElement>
        ))}
      </BodyWrapper>
    </TableContainer>
  );
};

import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  BodyWrapper,
  ButtonSection,
  HeaderWrapper,
  Img,
  InputElement,
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
import save from "../assets/save.svg";
import cancel from "../assets/cancel.svg";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

export const UserTable = () => {
  const [users, setUsers] = useState([]);
  const [deleteUser, setDeleteUser] = useState(false);
  const [editingUserId, setEditingUserId] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedSurname, setEditedSurname] = useState("");
  const [editedEmail, setEditedEmail] = useState("");
  const [editedPhoneNumber, setEditedPhoneNumber] = useState("");
  const [existingUserError, setExistingUserError] = useState(false);

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
    confirmAlert({
      title: "Confirm deletion!",
      message: "Are you sure you want to delete this user?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            axios
              .delete(`http://localhost:8000/users/${userId}`)
              .then(() => {
                setDeleteUser(true);
                toast.info("User deleted successfully", {
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
              .catch((error) => {
                console.log(error);
              });
          },
        },
        {
          label: "No",
          onClick: () => {},
        },
      ],
    });
  };

  const handleEditUser = (user) => {
    setEditingUserId(user.id);
    setEditedName(user.name);
    setEditedSurname(user.surname);
    setEditedEmail(user.email);
    setEditedPhoneNumber(user.phone_number);
  };

  const handleSaveChanges = () => {
    const existingUser = users.find((user) => user.email === editedEmail);
    if (existingUser && existingUser.id !== editingUserId) {
      setExistingUserError(true);
      return;
    }

    const updatedUser = {
      id: editingUserId,
      name: editedName,
      surname: editedSurname,
      email: editedEmail,
      phone_number: editedPhoneNumber,
    };

    axios
      .put(`http://localhost:8000/users/${editingUserId}`, updatedUser)
      .then(() => {
        setEditingUserId(null);
        setEditedName("");
        setEditedSurname("");
        setEditedEmail("");
        setEditedPhoneNumber("");
        fetchUsers();
        toast.success("User successfully edited", {
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

  useEffect(() => {
    if (existingUserError) {
      toast.error("User with this email already exists", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setExistingUserError(false);
    }
  }, [existingUserError]);

  return (
    <>
      <ToastContainer />
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
                    <InputElement
                      type="text"
                      value={editedName}
                      onChange={(e) => setEditedName(e.target.value)}
                    />
                  </TdElement>
                  <TdElement>
                    <InputElement
                      type="text"
                      value={editedSurname}
                      onChange={(e) => setEditedSurname(e.target.value)}
                    />
                  </TdElement>
                  <TdElement>
                    <InputElement
                      type="text"
                      value={editedEmail}
                      onChange={(e) => setEditedEmail(e.target.value)}
                    />
                  </TdElement>
                  <TdElement>
                    <InputElement
                      type="text"
                      value={editedPhoneNumber}
                      onChange={(e) => setEditedPhoneNumber(e.target.value)}
                    />
                  </TdElement>
                  <TdLastElement>
                    <ButtonSection onClick={handleSaveChanges}>
                      <Img src={save} alt="logo" />
                    </ButtonSection>
                    <ButtonSection onClick={handleCancelEdit}>
                      <Img src={cancel} alt="logo" />
                    </ButtonSection>
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
                    <ButtonSection onClick={() => handleEditUser(user)}>
                      <Img src={edit} alt="logo" />
                    </ButtonSection>
                    <ButtonSection onClick={() => handleDeleteUser(user.id)}>
                      <Img src={trash} alt="logo" />
                    </ButtonSection>
                  </TdLastElement>
                </>
              )}
            </TrElement>
          ))}
        </BodyWrapper>
      </TableContainer>
    </>
  );
};

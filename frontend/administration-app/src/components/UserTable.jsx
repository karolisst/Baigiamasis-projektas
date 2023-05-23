import { useState, useEffect } from "react";
import axios from "axios";

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
    axios
      .delete(`http://localhost:8000/users/${userId}`)
      .then((response) => {
        console.log(response.data);
        setDeleteUser(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (deleteUser) {
      fetchUsers();
      setDeleteUser(false);
    }
  }, [deleteUser]);

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Surname</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.surname}</td>
            <td>{user.email}</td>
            <td>{user.phone_number}</td>
            <td>
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

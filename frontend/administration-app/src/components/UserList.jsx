import {
  H1Element,
  NewUserButton,
  UsersSection,
} from "../styles/StyledUsersTable";
import { UserTable } from "./UserTable";

export const UserList = () => {
  return (
    <UsersSection>
      <NewUserButton to="/newuser">Add new event participant</NewUserButton>
      <H1Element>Registered event participants</H1Element>
      <UserTable />
    </UsersSection>
  );
};

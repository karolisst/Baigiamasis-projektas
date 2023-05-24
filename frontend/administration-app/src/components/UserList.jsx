import { H1Element, UsersSection } from "../styles/StyledUsersTable";
import { UserTable } from "./UserTable";

export const UserList = () => {
  return (
    <UsersSection>
      <H1Element>Registered event participants</H1Element>
      <UserTable />
    </UsersSection>
  );
};

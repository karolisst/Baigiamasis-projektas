import { AllUserButton } from "../styles/StyledNewUser";
import { NewUserButton } from "../styles/StyledUsersTable";
import {
  ButtonContainer,
  HomeContainer,
  H1Element,
} from "../styles/StyledHome";

export const HomePage = () => {
  return (
    <>
      <HomeContainer>
        <H1Element>Choose which actions you want to perform</H1Element>
        <ButtonContainer>
          <NewUserButton to="/newuser">Add new event participant</NewUserButton>
          <AllUserButton to="/registeredusers">
            View all registered participants
          </AllUserButton>
        </ButtonContainer>
      </HomeContainer>
    </>
  );
};

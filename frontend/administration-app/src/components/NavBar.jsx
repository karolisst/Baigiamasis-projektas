import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <>
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      </>
    </nav>
  );
};

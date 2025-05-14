import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <h1>React Web App</h1>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/film">Film</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

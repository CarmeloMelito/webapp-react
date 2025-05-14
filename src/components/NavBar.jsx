import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home Page</NavLink>
          </li>
          <li>
            <NavLink to="/films">Films List</NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

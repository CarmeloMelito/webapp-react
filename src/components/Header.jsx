import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-dark text-white py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="h3 mb-0">React Web App</h1>
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/" className="nav-link text-white">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/film" className="nav-link text-white">
                Film
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

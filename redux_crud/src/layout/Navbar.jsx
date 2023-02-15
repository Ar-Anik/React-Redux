import { NavLink } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="nav-link">
        Show-Book
      </NavLink>

      <NavLink to="/addbook" className="nav-link">
        Add-Book
      </NavLink>

      <NavLink to="/editbook" className="nav-link">
        Edit-Book
      </NavLink>
    </nav>
  );
};

export default Navbar;

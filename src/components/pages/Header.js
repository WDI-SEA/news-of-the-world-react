import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <nav>
        <NavLink to="/"> Back Home </NavLink>
        <NavLink to="/savedarticles"> Your Saved Articles </NavLink>
      </nav>
    </header>
  );
}

export default Header;

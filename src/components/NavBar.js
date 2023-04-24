import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <NavLink to="/" exact="true" className="logo-container">
          <img src={logo} alt="Logo" className="logo-image"></img>
          <span>The News Wave</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" exact="true" activeclassname="active">
            Home
          </NavLink>
          <NavLink to="/technology" activeclassname="active">
            Technology
          </NavLink>
          <NavLink to="/politics" activeclassname="active">
            Politics
          </NavLink>
          <NavLink to="/sports" activeclassname="active">
            Sports
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <NavLink to="/" exact className="logo-container">
          <img src={logo} alt="Logo" className="logo-image"></img>
          <span>The News Wave</span>
        </NavLink>
        <div className="nav-links">
          <NavLink to="/" exact activeClassName="active">
            Home
          </NavLink>
          <NavLink to="/technology" activeClassName="active">
            Technology
          </NavLink>
          <NavLink to="/politics" activeClassName="active">
            Politics
          </NavLink>
          <NavLink to="/sports" activeClassName="active">
            Sports
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

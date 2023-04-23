import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import '../styles/NavBar.css';

const NavBar = () => {
  return (
    <header>
      <nav className="nav-container">
        <Link to="/" className="logo-container">
          <img src={logo} alt="Logo" className="logo-image"></img>
          <span>The News Wave</span>
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/technology">Technology</Link>
          <Link to="/politics">Politics</Link>
          <Link to="/sports">Sports</Link>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;

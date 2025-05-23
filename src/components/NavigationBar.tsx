import { NavLink } from 'react-router-dom';
import styles from './NavigationBar.module.css';
import logo from '../assets/Navbarlogo.webp';
import { useState } from 'react';

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Eduhunt Logo "className={styles.logo} />
      </div>
      
      <div className={styles.hamburger} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`${styles.navList} ${isMenuOpen ? styles.menuOpen : ''}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => isActive ? styles.active : ''}
            end
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/careers"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            Careers
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => isActive ? styles.active : ''}
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
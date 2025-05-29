// src/components/Navbar/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { FaPlaneDeparture, FaBars, FaTimes } from 'react-icons/fa';

// Si tienes un logo.png en src/assets/, podrías importarlo así:
// import logoImage from '../../assets/logo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Cambia a 'scrolled' después de 50px de scroll
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll); // Limpieza al desmontar
  }, []);

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`${styles.navbarContainer} container`}>
        <Link to="/" className={styles.navbarLogo} onClick={closeMobileMenu}>
          {/* <img src={logoImage} alt="Travel Agency Logo" className={styles.logoImage} /> */}
          <FaPlaneDeparture className={styles.logoIcon} />
          Travel<span className={styles.logoHighlight}>X</span>
        </Link>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={isMenuOpen ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          <li className={styles.navItem}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? `${styles.navLinks} ${styles.activeLink}` : styles.navLinks
              }
              onClick={closeMobileMenu}
            >
              Inicio
            </NavLink>
          </li>
          <li className={styles.navItem}>
            <NavLink
              to="/viajes"
              className={({ isActive }) =>
                isActive ? `${styles.navLinks} ${styles.activeLink}` : styles.navLinks
              }
              onClick={closeMobileMenu}
            >
              Viajes
            </NavLink>
          </li>
          <li className={styles.navItem}>
            {/* Este link de contacto podría apuntar a una sección en la HomePage */}
            <a href="/#contacto" className={styles.navLinks} onClick={closeMobileMenu}>
              Contacto
            </a>
          </li>
          <li className={`${styles.navItem} ${styles.navBtnItem}`}>
            <Link to="/viajes" className={styles.navBtnLink} onClick={closeMobileMenu}>
              <button className={`button ${styles.navButton}`}>Reservar Ahora</button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
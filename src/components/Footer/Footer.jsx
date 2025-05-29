// src/components/Footer/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';
import { FaPlaneDeparture, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footerContainer} container`}>
        <div className={styles.footerGrid}>
          {/* Columna 1: Marca y Slogan */}
          <div className={styles.footerColumn}>
            <Link to="/" className={styles.footerLogo}>
              <FaPlaneDeparture className={styles.logoIcon} />
              Travel<span className={styles.logoHighlight}>X</span>
            </Link>
            <p className={styles.footerSlogan}>
              Tu aventura comienza aquí. Descubre el mundo con nosotros.
            </p>
          </div>

          {/* Columna 2: Links Rápidos */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Explora</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/">Inicio</Link></li>
              <li><Link to="/viajes">Todos los Viajes</Link></li>
              <li><a href="/#contacto">Contacto</a></li>
              {/* <li><Link to="/ofertas">Ofertas Especiales</Link></li> */}
            </ul>
          </div>

          {/* Columna 3: Legal y Soporte */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Soporte</h4>
            <ul className={styles.footerLinks}>
              <li><Link to="/faq">Preguntas Frecuentes</Link></li>
              <li><Link to="/terminos">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad">Política de Privacidad</Link></li>
            </ul>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className={styles.footerColumn}>
            <h4 className={styles.footerTitle}>Síguenos</h4>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><FaTwitter /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedinIn /></a>
            </div>
            <p className={styles.footerContact}>Email: info@travelx.com</p>
            <p className={styles.footerContact}>Tel: +123 456 7890</p>
          </div>
        </div>

        <div className={styles.footerBottom}>
          <p>© {new Date().getFullYear()} TravelX. Todos los derechos reservados.</p>
          <p>Diseñado con <span className={styles.heartIcon}>❤️</span> por Tu Agencia Creativa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
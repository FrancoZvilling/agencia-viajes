// src/pages/NotFoundPage/NotFoundPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NotFoundPage.module.css'; // Importa los CSS Modules

const NotFoundPage = () => {
  return (
    <div className={styles.notFoundContainer}> {/* Usa la clase del CSS Module */}
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>¡Ups! Página no encontrada.</h2>
      <p className={styles.errorDescription}>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </p>
      <Link to="/" className={`button ${styles.homeButton}`}> {/* Combina clase global 'button' con clase modular */}
        Volver al Inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;
// src/components/HeroSection/HeroSection.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';
import { motion } from 'framer-motion'; // Para animaciones

// Idealmente, la imagen de fondo se define en CSS.
// Si quieres una imagen dinámica desde JS, puedes pasarla como prop o definirla aquí.
// import heroBackgroundImage from '../../assets/images/hero-banner.jpg'; // Ejemplo

const HeroSection = () => {
  // Datos de la promoción destacada. Podrías obtener esto de un estado, props, o API.
  const featuredPromotion = {
    title: 'Descubre Tailandia Exótica',
    subtitle: 'Playas paradisíacas, templos ancestrales y una cultura vibrante te esperan. ¡Oferta exclusiva!',
    // Asume que tienes un viaje con este ID en tus mockData o API
    link: '/viaje/tailandia-exotica-promo', 
    price: 'Desde $1899 USD',
    // Si la imagen es dinámica y no solo por CSS:
    // image: 'https://via.placeholder.com/1920x1080/00B4D8/FFFFFF?text=Hero+Tailandia'
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3, ease: "easeOut" } },
  };

  const ctaVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.6, ease: "easeOut" } },
  };

  return (
    <div 
      className={styles.heroSection}
      // Si la imagen de fondo fuera dinámica:
      // style={{ backgroundImage: `url(${featuredPromotion.image || heroBackgroundImage})` }}
    >
      <div className={styles.heroOverlay}></div> {/* Capa para oscurecer la imagen */}
      <div className={`${styles.heroContent} container`}>
        <motion.h1
          className={styles.heroTitle}
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredPromotion.title}
        </motion.h1>

        <motion.p
          className={styles.heroSubtitle}
          variants={subtitleVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredPromotion.subtitle}
        </motion.p>

        <motion.div
          className={styles.heroCtaContainer}
          variants={ctaVariants}
          initial="hidden"
          animate="visible"
        >
          {featuredPromotion.price && (
            <span className={styles.heroPrice}>{featuredPromotion.price}</span>
          )}
          <Link to={featuredPromotion.link} className={`button ${styles.heroButtonPrimary}`}>
            Ver Promoción
          </Link>
          <Link to="/viajes" className={`button button-primary ${styles.heroButtonSecondary}`}>
            Explorar Destinos
          </Link>
        </motion.div>
      </div>
      {/* Opcional: Flecha para indicar scroll */}
      <div className={styles.scrollIndicator}>
        <span></span>
      </div>
    </div>
  );
};

export default HeroSection;
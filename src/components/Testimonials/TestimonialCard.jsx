// src/components/Testimonials/TestimonialCard.jsx
import React from 'react';
import styles from './TestimonialCard.module.css';
import { FaStar, FaQuoteLeft, FaUserCircle } from 'react-icons/fa'; // FaUserCircle como fallback
import { motion } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  if (!testimonial) return null;

  const { name, avatar, location, text, rating } = testimonial;

  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <FaStar key={i} className={i <= rating ? styles.starFilled : styles.starEmpty} />
      );
    }
    return stars;
  };

  // Variante de animación para cada tarjeta (será controlada por staggerChildren del padre)
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.div 
      className={styles.testimonialCard}
      variants={cardVariants}
      // whileHover={{ y: -5, boxShadow: "0 8px 20px rgba(0,0,0,0.1)" }} // Opcional hover
    >
      <div className={styles.cardHeader}>
        {avatar ? (
          <img src={avatar} alt={`Avatar de ${name}`} className={styles.avatar} />
        ) : (
          <FaUserCircle className={`${styles.avatar} ${styles.avatarPlaceholder}`} />
        )}
        <div className={styles.userInfo}>
          <h4 className={styles.userName}>{name}</h4>
          {location && <p className={styles.userLocation}>{location}</p>}
        </div>
      </div>
      <div className={styles.ratingContainer}>
        {renderStars()}
      </div>
      <div className={styles.testimonialContent}>
        <FaQuoteLeft className={styles.quoteIcon} />
        <p className={styles.testimonialText}>{text}</p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
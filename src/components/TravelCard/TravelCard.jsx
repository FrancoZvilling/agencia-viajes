// src/components/TravelCard/TravelCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './TravelCard.module.css';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaDollarSign } from 'react-icons/fa';

const TravelCard = ({ travel }) => {
  // Asegurarse de que 'travel' no sea undefined o null
  if (!travel) {
    // Podrías retornar un placeholder o null si el viaje no está definido
    console.warn("TravelCard recibió 'travel' como undefined o null.");
    return null; 
  }

  // Desestructuración segura con valores por defecto
  const { 
    id = 'default-id', 
    name = 'Nombre del Viaje no Disponible', 
    destination = 'Destino Desconocido', 
    price = 0, 
    originalPrice, // Puede ser undefined
    shortDescription = 'Descripción no disponible.', 
    images, // Array, puede ser undefined o vacío
    duration = 'Duración no especificada' 
  } = travel;

  // Usar la primera imagen o un placeholder
  const mainImage = images && images.length > 0 
    ? images[0] 
    : 'https://via.placeholder.com/400x300/E0E0E0/BDBDBD?text=Viaje';

  // Variante para la animación de la tarjeta
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    },
  };

  return (
    <motion.div
      className={styles.travelCard}
      variants={cardVariants}
      // 'initial' y 'animate' se controlarán desde el componente padre (FeaturedTravels o AllTravelsPage)
      // para animaciones escalonadas usando 'whileInView' o 'staggerChildren'.
      // Por ahora, para prueba individual, podrías usar:
      // initial="hidden"
      // animate="visible"
      whileHover={{ y: -8, boxShadow: "0 12px 25px rgba(0,0,0,0.12)" }}
      // viewport={{ once: true, amount: 0.2 }} // Para animar solo una vez cuando entra en vista
    >
      <Link to={`/viaje/${id}`} className={styles.cardLink}>
        <div className={styles.cardImageContainer}>
          <img src={mainImage} alt={`Imagen de ${name}`} className={styles.cardImage} />
          {originalPrice && price < originalPrice && (
            <span className={styles.discountBadge}>
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </span>
          )}
          <div className={styles.imageOverlay}>
            <span className={styles.overlayText}>Ver Detalles</span>
          </div>
        </div>

        <div className={styles.cardContent}>
          <h3 className={styles.cardTitle}>{name}</h3>
          <p className={styles.cardDestination}>
            <FaMapMarkerAlt className={styles.icon} /> {destination}
          </p>
          
          {duration && (
            <p className={styles.cardDuration}>
              <FaCalendarAlt className={styles.icon} /> {duration}
            </p>
          )}

          <p className={styles.cardDescription}>{shortDescription}</p>
          
          <div className={styles.cardFooter}>
            <div className={styles.cardPrice}>
              <FaDollarSign className={styles.iconPrice} />
              <span>{price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}</span> 
              {/* Ajusta 'es-AR' y 'ARS' a tu localidad/moneda */}
              {originalPrice && price < originalPrice && (
                <span className={styles.originalPrice}>
                    {originalPrice.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' })}
                </span>
              )}
            </div>
            {/* El Link envuelve toda la tarjeta, así que no es estrictamente necesario un botón aquí,
                pero podrías tenerlo si el diseño lo requiere. */}
            {/* <span className={`button ${styles.detailsButton}`}>Más Info</span> */}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default TravelCard;
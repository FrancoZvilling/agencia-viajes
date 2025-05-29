// src/components/InspirationalGallery/InspirationalGallery.jsx
import React from 'react';
import styles from './InspirationalGallery.module.css';
import { mockGallery } from '../../data/mockGallery';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Opcional, si quieres enlazar a algo
// import { FaSearchPlus } from 'react-icons/fa'; // Opcional, si añades un botón

const InspirationalGallery = () => {
  if (!mockGallery || mockGallery.length === 0) {
    return null;
  }

  // Variantes para la animación de la sección y el grid
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1, // Animación escalonada para los ítems
      },
    },
  };
  
  // Variante para cada ítem de la galería
  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className={`${styles.gallerySection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Galería de Inspiración
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Deja que estas imágenes te transporten a tu próximo destino soñado.
        </motion.p>

        <motion.div 
          className={styles.galleryGrid}
          variants={gridVariants}
          // initial y whileInView ya están en la sección padre
        >
          {mockGallery.map((item) => (
            <motion.div 
              key={item.id} 
              className={styles.galleryItem}
              variants={itemVariants}
              whileHover={{ scale: 1.03, zIndex: 1, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
              // Opcional: Si quieres que cada item sea un link
              // Si usas Link, envuelve img y galleryOverlay con él.
              // <Link to={`/destinos/${item.destination.toLowerCase().replace(/\s+/g, '-')}`}> 
            >
              <img src={item.image} alt={`Imagen inspiradora de ${item.destination}`} className={styles.galleryImage} />
              <div className={styles.galleryOverlay}>
                <h4 className={styles.galleryDestination}>{item.destination}</h4>
                <p className={styles.galleryDescription}>{item.description}</p>
                {/* Opcional: Botón para explorar más sobre el destino */}
                {/* <Link to={`/explorar/${item.id}`} className={styles.exploreButton}>
                    <FaSearchPlus /> Explorar
                </Link> */}
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Podrías añadir un botón para ver más imágenes si tienes muchas */}
        {/* <div className={styles.seeMoreContainer}>
            <Link to="/galeria-completa" className="button">Ver Más Inspiración</Link>
        </div> */}
      </div>
    </motion.section>
  );
};

export default InspirationalGallery;
// src/components/FeaturedTravels/FeaturedTravels.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FeaturedTravels.module.css';
import TravelCard from '../TravelCard/TravelCard';
import { mockTravels } from '../../data/mockTravels'; // Importa tus datos mock
import { motion } from 'framer-motion';

const FeaturedTravels = () => {
  // Selecciona los viajes destacados.
  // Opción 1: Filtrar por una propiedad 'featured: true' y tomar hasta 6.
  const featured = mockTravels.filter(travel => travel.featured).slice(0, 6);
  
  // Opción 2: Si no hay 'featured', tomar los primeros 6.
  // const travelsToShow = featured.length >= 3 ? featured : mockTravels.slice(0, 6);
  // Usaremos la Opción 1 por ahora. Si 'featured' está vacío, no se mostrará nada.
  const travelsToShow = featured; 

  // Si no hay viajes para mostrar, podrías retornar null o un mensaje.
  if (travelsToShow.length === 0) {
    // return <p className="container text-center section-padding">No hay viajes destacados en este momento.</p>;
    // O simplemente no renderizar la sección si no hay destacados:
    return null; 
  }

  // Variantes para la animación del contenedor del grid y del título/botón
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Aplica un retraso escalonado a la animación de cada TravelCard
        delayChildren: 0.2,   // Retraso antes de que los hijos comiencen a animar
      },
    },
  };

  return (
    <motion.section 
      className={`${styles.featuredTravelsSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible" // Anima cuando la sección entra en la vista
      viewport={{ once: true, amount: 0.2 }} // amount: porcentaje de visibilidad para activar
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }} // Anima el título también
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Viajes Destacados
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explora nuestras selecciones más populares y embárcate en una aventura inolvidable.
        </motion.p>

        <motion.div 
          className={styles.travelsGrid}
          variants={gridVariants}
          // initial y whileInView ya están en el section padre, pero para el stagger es bueno tenerlo aquí
          initial="hidden" 
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }} // El grid se anima cuando un 10% es visible
        >
          {travelsToShow.map((travel) => (
            // TravelCard ya tiene sus propias variantes 'cardVariants' que se activarán por el stagger
            <TravelCard key={travel.id} travel={travel} />
          ))}
        </motion.div>

        {/* Mostrar el botón "Ver Todos" solo si hay más viajes que los destacados mostrados */}
        {mockTravels.length > travelsToShow.length && (
          <motion.div 
            className={styles.seeAllButtonContainer}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.5, delay: (travelsToShow.length * 0.1) + 0.3 }} // Delay después de las tarjetas
          >
            <Link to="/viajes" className="button button-primary">
              Ver Todos los Viajes
            </Link>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default FeaturedTravels;
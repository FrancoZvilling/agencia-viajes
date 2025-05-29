// src/components/WhyChooseUs/WhyChooseUs.jsx
import React from 'react';
import styles from './WhyChooseUs.module.css';
import { motion } from 'framer-motion';
import { 
  FaAward,         // Para Experiencia/Calidad
  FaHeadset,       // Para Atención Personalizada/Soporte
  FaGlobeAmericas, // Para Variedad de Destinos
  FaUserShield,    // Para Seguridad/Confianza
  FaWallet,        // Para Mejores Precios/Valor
  FaStar           // Para Pasión/Excelencia (o puedes usar FaPlaneDeparture)
} from 'react-icons/fa';

// Define las características o ventajas de tu agencia
const features = [
  {
    icon: <FaAward />,
    title: 'Experiencia Comprobada',
    description: 'Años en la industria turística avalan nuestra calidad y profundo conocimiento de cada destino.',
  },
  {
    icon: <FaHeadset />,
    title: 'Atención Personalizada 24/7',
    description: 'Te asesoramos en cada paso, antes, durante y después de tu viaje, para una experiencia perfecta.',
  },
  {
    icon: <FaGlobeAmericas />,
    title: 'Destinos Exclusivos y Variados',
    description: 'Acceso a una amplia gama de destinos y experiencias únicas cuidadosamente seleccionadas en el mundo.',
  },
  {
    icon: <FaUserShield />,
    title: 'Viajes Seguros y Confiables',
    description: 'Priorizamos tu seguridad y bienestar con los mejores proveedores y seguros de viaje incluidos.',
  },
  {
    icon: <FaWallet />,
    title: 'Precios Competitivos y Transparentes',
    description: 'Ofrecemos tarifas justas, opciones para todos los presupuestos y sin costos ocultos.',
  },
  {
    icon: <FaStar />,
    title: 'Pasión por Viajar',
    description: 'Somos viajeros apasionados dedicados a ayudarte a cumplir tus sueños de aventura y descubrimiento.',
  }
];

const WhyChooseUs = () => {
  // Variantes de animación para la sección y el grid de características
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15, // Animación escalonada para cada ítem
        delayChildren: 0.2,
      },
    },
  };

  // Variante para cada ítem de característica
  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
  };

  return (
    <motion.section 
      className={`${styles.whyChooseUsSection} section-padding`}
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
          ¿Por Qué Viajar Con Nosotros?
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Descubre las razones que nos convierten en tu mejor aliado para explorar el mundo.
        </motion.p>

        <motion.div 
          className={styles.featuresGrid}
          variants={gridVariants}
          // initial y whileInView ya están en la sección padre
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className={styles.featureItem}
              variants={itemVariants}
              whileHover={{ y: -6, boxShadow: "0 10px 25px rgba(0,0,0,0.12)" }}
            >
              <div className={styles.featureIconContainer}>
                {feature.icon}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyChooseUs;
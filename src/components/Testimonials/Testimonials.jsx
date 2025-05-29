// src/components/Testimonials/Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.css';
import { mockTestimonials } from '../../data/mockTestimonials';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

// Si quieres usar un carrusel más adelante, puedes instalar Swiper:
// npm install swiper
// Y luego importar:
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination, Navigation, Autoplay } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/navigation'; // Si usas botones de navegación

const Testimonials = () => {
  if (!mockTestimonials || mockTestimonials.length === 0) {
    return null; // No renderizar nada si no hay testimonios
  }

  // Mostrar solo los primeros 3 o 4 para un grid. Si usas carrusel, puedes mostrarlos todos.
  const testimonialsToShow = mockTestimonials.slice(0, 3); 

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  const gridVariants = {
    hidden: {}, // La opacidad se maneja por la sección padre
    visible: {
      transition: {
        staggerChildren: 0.2, // Animación escalonada para las tarjetas
        delayChildren: 0.2,
      },
    },
  };

  return (
    <motion.section 
      className={`${styles.testimonialsSection} section-padding`}
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Lo Que Dicen Nuestros Viajeros
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Experiencias reales de clientes que confiaron en nosotros para sus aventuras.
        </motion.p>

        {/* Opción 1: Grid simple (usaremos esta por ahora) */}
        <motion.div 
          className={styles.testimonialsGrid}
          variants={gridVariants}
          // initial y whileInView ya están en la sección padre
        >
          {testimonialsToShow.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </motion.div>

        {/* Opción 2: Carrusel con Swiper (descomentar e instalar swiper si se usa) */}
        {/* 
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30} // Espacio entre slides
          slidesPerView={1} // Slides visibles por defecto
          loop={true}
          autoplay={{
            delay: 5000, // Tiempo entre transiciones automáticas
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true, el: `.${styles.swiperPaginationCustom}` }}
          navigation={{
             nextEl: `.${styles.swiperButtonNextCustom}`,
             prevEl: `.${styles.swiperButtonPrevCustom}`,
          }} // Solo mostrar si hay más de 1
          breakpoints={{ // Configuración responsive
            768: {
              slidesPerView: 2,
            },
            1024: { // O 1200px si tu container es más ancho
              slidesPerView: 3, 
            },
          }}
          className={styles.testimonialSwiper} // Clase para estilos personalizados del Swiper
        >
          {mockTestimonials.map((testimonial) => ( // Mapea todos para el carrusel
            <SwiperSlide key={testimonial.id} className={styles.swiperSlide}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={styles.swiperControls}>
            <div className={styles.swiperButtonPrevCustom}><FaChevronLeft /></div>
            <div className={styles.swiperPaginationCustom}></div>
            <div className={styles.swiperButtonNextCustom}><FaChevronRight /></div>
        </div>
        */}
      </div>
    </motion.section>
  );
};

export default Testimonials;
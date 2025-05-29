// src/components/ContactWhatsApp/ContactWhatsApp.jsx
import React, { useState } from 'react';
import styles from './ContactWhatsApp.module.css';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaUser, FaRegUser, FaEnvelopeOpenText, FaPaperPlane } from 'react-icons/fa';

const ContactWhatsApp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '', // Apellido es opcional
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, message } = formData;

    // Validación simple
    if (!firstName.trim() || !message.trim()) {
      alert("Por favor, completa tu nombre y el mensaje.");
      return;
    }

    // IMPORTANTE: Reemplaza con TU NÚMERO DE WHATSAPP 
    // (incluyendo código de país, sin '+' ni '00')
    // Ejemplo para Argentina: 5491112345678
    // Ejemplo para España: 34600123456
    const whatsappNumber = 'TU_NUMERO_DE_WHATSAPP_AQUI'; 
    
    if (whatsappNumber === 'TU_NUMERO_DE_WHATSAPP_AQUI') {
        alert("Por favor, configura el número de WhatsApp del desarrollador en el componente ContactWhatsApp.jsx");
        return;
    }

    let fullMessage = `Hola, soy ${firstName.trim()}`;
    if (lastName.trim()) {
      fullMessage += ` ${lastName.trim()}`;
    }
    fullMessage += `.\n\nConsulta desde la web:\n${message.trim()}`;
    
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(fullMessage)}`;
    
    window.open(whatsappUrl, '_blank'); // Abre WhatsApp en una nueva pestaña
    
    // Opcional: resetear el formulario después de enviar
    setFormData({ firstName: '', lastName: '', message: '' });
  };

  // Variantes de animación
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };
  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.3, ease: "easeOut" } },
  };

  return (
    <motion.section 
      id="contacto" // ID para el ancla del Navbar
      className={`${styles.contactSection} section-padding`}
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
          ¿Listo para tu Próxima Aventura?
        </motion.h2>
        <motion.p 
          className={styles.sectionSubtitle}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Envíanos un mensaje directo a WhatsApp y te ayudaremos a planificar el viaje de tus sueños.
        </motion.p>

        <motion.form 
          onSubmit={handleSubmit} 
          className={styles.contactForm}
          variants={formVariants}
          // initial, whileInView, viewport ya están en la sección padre, 
          // pero el delay en formVariants le da un efecto agradable.
        >
          <div className={styles.formRow}>
            <div className={styles.formGroup}>
              <label htmlFor="firstName"><FaUser className={styles.inputIcon}/> Nombre <span className={styles.required}>*</span></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Tu nombre"
                required
                className={styles.formInput}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="lastName"><FaRegUser className={styles.inputIcon}/> Apellido</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Tu apellido (opcional)"
                className={styles.formInput}
              />
            </div>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message"><FaEnvelopeOpenText className={styles.inputIcon}/> Mensaje <span className={styles.required}>*</span></label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Hola, me gustaría consultar sobre..."
              rows="5"
              required
              className={styles.formTextarea}
            ></textarea>
          </div>
          <button type="submit" className={`button ${styles.submitButton}`}>
            <FaWhatsapp /> Enviar por WhatsApp <FaPaperPlane className={styles.sendIcon}/>
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactWhatsApp;
// src/pages/HomePage/HomePage.jsx
import React from 'react';
import HeroSection from '../../components/HeroSection/HeroSection';
import FeaturedTravels from '../../components/FeaturedTravels/FeaturedTravels';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'; // Importa
import InspirationalGallery from '../../components/InspirationalGallery/InspirationalGallery';
import Testimonials from '../../components/Testimonials/Testimonials';
import ContactWhatsApp from '../../components/ContactWhatsApp/ContactWhatsApp';

// import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturedTravels />
      <WhyChooseUs /> {/* Añade el componente aquí */}
      <InspirationalGallery />
      <Testimonials />
      <ContactWhatsApp />
    </>
  );
};
export default HomePage;
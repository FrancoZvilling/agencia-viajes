// src/App.jsx
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'; // Importaremos el Navbar más adelante
import Footer from './components/Footer/Footer'; // Importaremos el Footer más adelante
import ScrollToTop from './components/utils/ScrollToTop'; // Crearemos este util a continuación

// Carga diferida (Lazy Loading) para las páginas
// Esto significa que el código de cada página solo se cargará cuando el usuario la visite.
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const AllTravelsPage = lazy(() => import('./pages/AllTravelsPage/AllTravelsPage'));
const TravelDetailPage = lazy(() => import('./pages/TravelDetailPage/TravelDetailPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage')); // Para rutas no encontradas

// Un componente simple para mostrar un mensaje de "Cargando..." mientras se cargan las páginas
const LoadingFallback = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', fontSize: '2rem', fontFamily: 'var(--font-family-sans-serif)' }}>
    Cargando...
  </div>
);

function App() {
  return (
    <Router> {/* Envuelve toda la aplicación con el Router */}
      <ScrollToTop /> {/* Componente para hacer scroll al inicio en cada cambio de ruta */}
      <Navbar /> {/* El Navbar será visible en todas las páginas */}
      
      <Suspense fallback={<LoadingFallback />}> {/* Muestra el fallback mientras se carga el componente de la ruta */}
        <main> {/* Es una buena práctica envolver el contenido principal de las rutas en un <main> */}
          <Routes> {/* Define el conjunto de rutas */}
            <Route path="/" element={<HomePage />} /> {/* Ruta para la página de inicio */}
            <Route path="/viajes" element={<AllTravelsPage />} /> {/* Ruta para la página de todos los viajes */}
            <Route path="/viaje/:travelId" element={<TravelDetailPage />} /> {/* Ruta dinámica para el detalle de un viaje específico */}
            <Route path="*" element={<NotFoundPage />} /> {/* Ruta comodín para cualquier URL no definida (Error 404) */}
          </Routes>
        </main>
      </Suspense>
      
      <Footer /> {/* El Footer también será visible en todas las páginas */}
    </Router>
  );
}

export default App;
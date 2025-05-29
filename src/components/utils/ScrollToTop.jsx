// src/components/utils/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
  const { pathname } = useLocation(); // Obtiene la ruta actual

  useEffect(() => {
    // Hace scroll hacia arriba (0, 0) cada vez que cambia el 'pathname'
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Este componente no renderiza nada visualmente
}

export default ScrollToTop;
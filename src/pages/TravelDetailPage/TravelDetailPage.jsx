// src/pages/TravelDetailPage/TravelDetailPage.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const TravelDetailPage = () => {
  const { travelId } = useParams();
  return (
    <div className="container" style={{ minHeight: 'calc(100vh - 160px)', paddingTop: '40px', paddingBottom: '40px' }}>
      <h1 className="section-title">Detalle del Viaje: {travelId}</h1>
      <p style={{ textAlign: 'center' }}>Información detallada sobre el viaje seleccionado.</p>
    </div>
  );
};
export default TravelDetailPage;
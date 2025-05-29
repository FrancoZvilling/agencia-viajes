/* src/pages/NotFoundPage/NotFoundPage.module.css */
.notFoundContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px); /* Menos el navbar. El footer está debajo. */
  padding: 20px;
  text-align: center;
  background-color: var(--background-light);
}

.errorCode {
  font-size: 6rem; /* Reducido para que no sea tan masivo inicialmente */
  font-weight: 700;
  color: var(--primary-color);
  margin-bottom: 0;
  line-height: 1;
}

.errorMessage {
  font-size: 2rem;
  color: var(--dark-color);
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.errorDescription {
  font-size: 1.1rem;
  color: var(--text-color);
  margin-bottom: 2rem;
  max-width: 500px;
}

.homeButton {
  /* Estilos heredados de .button global */
  /* background-color: var(--accent-color); */
  /* color: var(--dark-color); */
  font-weight: 600;
}
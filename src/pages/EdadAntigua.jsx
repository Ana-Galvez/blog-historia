import React from 'react';
import EraPage from '../components/EraPage';

const EdadAntigua = () => {
  const items = [
    "Mesopotamia",
    "Egipto",
    "Grecia",
    "Roma"
  ];

  return (
    <EraPage
      title="Edad Antigua"
      description="La Edad Antigua es el período de la historia que se inicia con la invención de la escritura, hacia el 3000 a.C., y finaliza con la caída del Imperio Romano de Occidente, en el 476 d.C."
      items={items}
    />
  );
};

export default EdadAntigua;

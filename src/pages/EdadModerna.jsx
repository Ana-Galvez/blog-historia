import React from 'react';
import EraPage from '../components/EraPage';

const EdadModerna = () => {
  const items = [
    "El Renacimiento",
    "La Ilustración",
    "La Revolución Francesa",
    "La Revolución Industrial"
  ];

  return (
    <EraPage
      title="Edad Moderna"
      description="La Edad Moderna comprende desde la caída del Imperio Bizantino en 1453 hasta 1789 con la Revolución Francesa."
      items={items}
    />
  );
};

export default EdadModerna;

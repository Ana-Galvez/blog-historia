import React from 'react';
import EraPage from '../components/EraPage';

const EdadContemporanea = () => {
  const items = [
    "Guerras Mundiales",
    "Guerra Fría",
    "Globalización",
    "Era Digital"
  ];

  return (
    <EraPage
      title="Edad Contemporánea"
      description="La Edad Contemporánea comprende desde la Revolución Francesa hasta por ahora la actualidad."
      items={items}
    />
  );
};

export default EdadContemporanea;

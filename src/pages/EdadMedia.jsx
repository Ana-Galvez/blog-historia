import React from 'react';
import EraPage from '../components/EraPage';

const EdadMedia = () => {
  const items = [
    "Alta Edad Media",
    "Baja Edad Media",
    "Feudalismo",
    "Las Cruzadas"
  ];

  return (
    <EraPage
      title="Edad Media"
      description="La Edad Media es el período histórico de la civilización occidental comprendido entre el siglo V y el XV. Su inicio se sitúa en el año 476, el año de la caída del Imperio romano de Occidente, y su final en 1453 cuando el Imperio Bizantino o Imperio Romano Oriental cayó ante el Imperio Otomano."
      items={items}
    />
  );
};

export default EdadMedia;

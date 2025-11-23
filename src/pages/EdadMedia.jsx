import EraPage from '../components/EraPage';

const EdadMedia = () => {
  const items = [
    { name: "Alta Edad Media", path: null },
    { name: "Baja Edad Media", path: null },
    { name: "Feudalismo", path: null },
    { name: "Las Cruzadas", path: null },
    { name: "Guillermo de Tiro", path: "/guillermo-de-tiro" }
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

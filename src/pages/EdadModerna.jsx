import EraPage from '../components/EraPage';

const EdadModerna = () => {
  const items = [
    { name: "El Renacimiento", path: null },
    { name: "La Ilustración", path: null },
    { name: "La Revolución Francesa", path: null },
    { name: "La Revolución Industrial", path: null }
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

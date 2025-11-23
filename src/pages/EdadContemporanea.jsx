import EraPage from '../components/EraPage';

const EdadContemporanea = () => {
  const items = [
    { name: "Guerras Mundiales", path: null },
    { name: "Guerra Fría", path: null },
    { name: "Globalización", path: null },
    { name: "Era Digital", path: null }
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

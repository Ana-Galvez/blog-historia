import EraPage from '../components/EraPage';

const EdadMedia = () => {
  const items = [
    { name: "Guillermo de Tiro", path: "/guillermo-de-tiro" },
    { name: "Ertugrul Gazi", path: "/ertugrul-gazi" },
    { name: "Halime Hatun (Esposa de Ertugrul Gazi)", path: "/halime-hatun-ertugrul" },
    { name: "Hayme Hatun (Madre de Ertugrul Gazi)", path: "/hayme-ertugrul" },
    { name: "Suleyman Shah (Padre de Ertugrul Gazi)", path: "/suleyman-sha" },
    { name: "Gündoğdu Ertugrul (Hermano de Ertugrul Gazi)", path: "/gundogdu-ertugrul" },
    { name: "Dündar Ertugrul (Hermano de Ertugrul Gazi)", path: "/dundar-ertugrul" },
    { name: "Sungurtekin Ertugrul (Hermano de Ertugrul Gazi)", path: "/sungurtekin-ertugrul" }
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

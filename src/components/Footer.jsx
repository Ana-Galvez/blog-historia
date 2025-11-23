import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Minibiografías Históricas. Todos los derechos reservados.
        <a href="https://www.youtube.com/c/Minibiograf%C3%ADashist%C3%B3ricas" target="_blank">  Mi canal de YouTube</a></p>
      <p>Desarrollado por Ana Galvez</p>
    </footer>
  );
};

export default Footer;

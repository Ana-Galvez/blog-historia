import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import modoOscuro from "../assets/modo-oscuro.png";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleTheme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Minibiografías Históricas</h2>
        <img
          src={modoOscuro}
          alt="Modo Oscuro"
          style={{
            width: "70px",
            height: "70px",
            marginLeft: "50px",
            cursor: "pointer",
          }}
          onClick={toggleTheme}
        />
        <button className="hamburger" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
      <nav className={`sidebar-nav ${isOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Inicio
            </Link>
          </li>
          <li>
            <Link to="/edad-antigua" onClick={() => setIsOpen(false)}>
              Edad Antigua
            </Link>
          </li>
          <li>
            <Link to="/edad-media" onClick={() => setIsOpen(false)}>
              Edad Media
            </Link>
          </li>
          <li>
            <Link to="/edad-moderna" onClick={() => setIsOpen(false)}>
              Edad Moderna
            </Link>
          </li>
          <li>
            <Link to="/edad-contemporanea" onClick={() => setIsOpen(false)}>
              Edad Contemporánea
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

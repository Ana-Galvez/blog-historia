import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Minibiografías Históricas</h2>
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

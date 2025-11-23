import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Minibiografías Históricas</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/edad-antigua">Edad Antigua</Link>
          </li>
          <li>
            <Link to="/edad-media">Edad Media</Link>
          </li>
          <li>
            <Link to="/edad-moderna">Edad Moderna</Link>
          </li>
          <li>
            <Link to="/edad-contemporanea">Edad Contemporánea</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;

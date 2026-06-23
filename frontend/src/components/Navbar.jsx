import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="site-navbar">
      <div className="navbar-brand">
        <h2>🧪 Poções e Soluções</h2>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Vitrine da Loja</Link>
        </li>
        <li>
          <Link to="/admin">Painel de Administração</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
import './header.css';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container h3">SOLEA</div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a href="#catalog">CATALOGUE</a>
            </li>
            <li>
              <a href="#advantage">AVANTAGES</a>
            </li>
            <li>
              <a href="#review">Avis</a>
            </li>
            <li>
              <a href="#order">Comment commander</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

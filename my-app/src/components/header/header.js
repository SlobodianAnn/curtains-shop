import './header.css';
import logo from '../../img/logo.png';

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-container">
        <nav>
          <ul>
            <li>
              <a href="">КАТАЛОГ</a>
            </li>
            <li>
              <a href="">ПРЕИМУЩЕСТВА</a>
            </li>
            <li>
              <a href="">Отзывы</a>
            </li>
            <li>
              <a href="">КАК ЗАКАЗАТЬ</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;

import logoSvg from '../assets/img/logo.svg';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__logo">
            <img width="90" src={logoSvg} alt="Marvel logo" />
          </div>
        </div>
        <div className="header__text">
          <div className="header__characters">
            <Link to="/">
              <h3>Characters</h3>
            </Link>
          </div>
          <div className="header__comics">
            <Link to="/comics">
              <h3>Comics</h3>
            </Link>
          </div>
          <div className="header__series">
            <Link to="/series">
              <h3>Series</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

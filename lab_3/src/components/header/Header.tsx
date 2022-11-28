import { NavLink } from 'react-router-dom';
import logoSvg from '../../assets/img/logo.svg';
import styles from './Header.module.scss';

export const Header: React.FC = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logoContainer}>
        <img src={logoSvg} className={styles.logo} alt="Marvel" />
      </div>
      <nav className={styles.nav}>
        <NavLink className={styles.navItem} to="/">
          Characters
        </NavLink>
        <NavLink className={styles.navItem} to="/comics">
          Comics
        </NavLink>
        <NavLink className={styles.navItem} to="/series">
          Series
        </NavLink>
      </nav>
    </header>
  );
};

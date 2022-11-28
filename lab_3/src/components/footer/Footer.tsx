import logoSvg from '../../assets/img/footer-logo.svg';
import styles from './Footer.module.scss';

export const Footer: React.FC = () => {
  const CURRENT_YEAR: number = new Date().getFullYear();

  return (
    <footer className={styles.footerContainer}>
      <div className={styles.logoContainer}>
        <img src={logoSvg} alt="Marvel" />
      </div>
      <p>Data provided by Marvel. © {CURRENT_YEAR} MARVEL</p>
      <a
        href="https://developer.marvel.com/"
        className={styles.link}
        target="_blank"
        rel="noreferrer">
        developer.marvel.com
      </a>
    </footer>
  );
};

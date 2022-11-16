import logoSvg from '../assets/img/footer-logo.svg';

new Date().getFullYear();

export const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo">
          <img width="90" src={logoSvg} alt="Marvel logo" />
        </div>
        <div className="footer__text">
          <p>Data provided by Marvel. © {new Date().getFullYear()} MARVEL</p>
        </div>
        <div className="footer__text">
          <p>developer.marvel.com</p>
        </div>
      </div>
    </div>
  );
};

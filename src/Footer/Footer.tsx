import { Link } from 'react-router-dom';
import './Footer.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__container">
        <div className="footer__logo"></div>

        <ul className="footer__contacts">
          <li className="footer__contact">
            <Link
              to="https://github.com/shymdima"
              className="footer__link"
              target="_blank"
            >
              Github
            </Link>
          </li>
          <li className="footer__contact">
            <Link
              to="https://github.com/shymdima"
              className="footer__link"
              target="_blank"
            >
              Contacts
            </Link>
          </li>
          <li className="footer__contact">
            <Link
              to="https://github.com/shymdima"
              className="footer__link"
              target="_blank"
            >
              rights
            </Link>
          </li>
        </ul>

        <div className="footer__back-to-top">
          <span className="footer__text">Back to top</span>
          <button
            className="footer__button"
            onClick={() => window.scrollTo(0, 0)}
          ></button>
        </div>
      </div>
    </div>
  );
};

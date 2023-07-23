import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Lenard</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Recent Works
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://m.me/LenardRoyArellano"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-facebook-messenger-alt"></i>
          </a>

          <a
            href="https://github.com/YowHobin"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-github-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/lenard-roy-arellano-485845266/"
            className="footer__social-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="uil uil-linkedin-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Lenard Roy Arellano. All rights reserved
        </span>
      </div>
    </footer>
  );
}

export default Footer
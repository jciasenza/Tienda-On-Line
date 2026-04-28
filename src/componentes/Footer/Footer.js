import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsInstagram,
  BsGithub,
  BsWhatsapp,
} from "react-icons/bs";
import { MdEmail } from "react-icons/md";

export const Footer = () => {
  const whatsapp = "+541158094982";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Acerca</h6>
            <p className="text-justify">
              ShopShoes<i> TU TIENDA ONLINE DE ZAPALLITAS </i> La mas grande
              cadena de zapatillas on-line
            </p>
          </div>
          <br />
          <div className="footer-links-container">
            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="/acerca">Acerca</a>
                </li>
                <li>
                  <a href="/contacto">Contacto</a>
                </li>
                <li>
                  <a href="/privacidad">Politica de Privacidad</a>
                </li>
              </ul>
            </div>

            <div className="text-end social-app">
              <h6>Seguinos en nuestras Redes Sociales</h6>
              <ul className="social-icons app-icons">
                <li>
                  <a
                    className="facebook"
                    href="https://es-la.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsFacebook />
                  </a>
                </li>
                <li>
                  <a
                    className="twitter"
                    href="https://twitter.com/?lang=es"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsTwitter />
                  </a>
                </li>
                <li>
                  <a
                    className="dribbble"
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <BsInstagram />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <br />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">
              Derechos Reservados | Iasenza Juan Carlos
            </p>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li>
                <a
                  className="facebook"
                  href={`https://wa.me/${whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <BsWhatsapp />
                </a>
              </li>
              <li>
                <a
                  className="twitter"
                  href="mailto:iasenzajuancarlos@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <MdEmail />
                </a>
              </li>
              <li>
                <a
                  className="dribbble"
                  href="https://github.com/jciasenza"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub />
                </a>
              </li>
              <li>
                <a
                  className="linkedin"
                  href="https://www.linkedin.com/in/juan-carlos-iasenza-8119501a9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

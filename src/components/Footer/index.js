import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  // JSX stuff
  render() {
    return (
      <section id="footer">
        <footer className="page-footer font-small blue pt-4">
          <div className="container">
            <div className="row">
              {/* Sessão das redes sociais */}
              <div className="col-xl-6 col-lg-4 col-md-2 mb-4 col-sm-1 col-12 flex-center text-center icones-sociais">
                <a
                  className="li-ic"
                  href="https://api.whatsapp.com/send?1=pt_BR&phone=55061991169967&text=Ol%C3%A1!%20Acessei%20a%20PrimeCodes%20pelo%20site%20e%20gostaria%20de%20obter%20mais%20informa%C3%A7%C3%B5es"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Enviar mensagem no Whatsapp"
                    className="fab fa-whatsapp fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>
                <a
                  className="li-ic"
                  href="https://www.linkedin.com/company/prime-codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Linkedin"
                    className="fab  fa-linkedin fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>

                <a
                  className="ins-ic"
                  href="https://www.instagram.com/prime_codes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i
                    data-toggle="tooltip"
                    data-placement="bottom"
                    title="Instagram @prime_codes"
                    className="fab fa-instagram fa-lg white-text mr-md-5 mr-3 fa-2x hover-social"
                  >
                    {" "}
                  </i>
                </a>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright - PrimeCodes
          </div>
          {/* Copyright */}
        </footer>
      </section>
    );
  }
}

export default Footer;

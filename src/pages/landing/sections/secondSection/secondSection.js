import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

import logo from "../../../../img/logo.png";
import webSiteImg from "../../../../img/web-site.svg";
import designGraficoImg from "../../../../img/SVG/ok2.svg";

export default class SecondSection extends Component {
  render() {
    return (
      <section id="second-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img className="logotipo" src={logo}></img>
              <h1 className="title">A final... Quem somos?</h1>
              <p className="sub-title">
                Somos uma empresa junta duas áreas importantes para qualquer
                negócio, seja ele pessoal ou empresarial. Somos artistas.
                Desenvolvedores e Designers trabalhando para que seu projeto
                tenha mais desempenho e beleza.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

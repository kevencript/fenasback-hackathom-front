import React, { Component } from "react";
import vida from "../../../../img/seguro_vida.png";
import emprestimo from "../../../../img/emprestimo.png";
import consorcio from "../../../../img/consorcio.png";

import "./style.css";
import { Link } from "react-router-dom";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="sec-produtos">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Nossos produtos
            </h1>
          </div>
        </div>

        <div className="container justify-content-center">
          <img
            className="ml-5"
            src="http://www.fenasbac.com.br/imagens/logo-fenasbac.png"
          />
          <h1 id="title-third-sec"> Confira nossos produtos!</h1>
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/villa-mix">
                  <img className="card-img-top" src={vida} alt="" />
                </Link>
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/funn-festival">
                  <img className="card-img-top" src={emprestimo} alt="" />
                </Link>
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/federal-music">
                  <img className="card-img-top" src={consorcio} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

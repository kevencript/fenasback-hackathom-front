import React, { Component } from "react";
import img from "../../img/funn-clean.png";
import { Link } from "react-router-dom";

import "./style.css";

export default class FunnFestival extends Component {
  render() {
    return (
      <section id="villa-mix">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Funn Festival 2020
            </h1>
          </div>
        </div>

        <div className="container pb-4">
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card">
                <img className="card-img-top" src={img} alt="" />
              </div>
            </div>

            <div className="justify-content-center">
              <h2 id="title-desc">Descrição</h2>
              <h1 id="text-desc">
                <b id="bold">Local:</b> Centro de Entretenimento Urbano (CEU)
                Asbac.
                <br />
                <br /> As crianças poderão desfrutar de uma programação de
                espetáculos e teatros, como Moana - Uma aventura no mar, O rei
                leão e Patrulha canina. Para assistir as peças é cobrado apenas
                a entrada no complexo, no valor de R$ 25, sendo R$ 20 revertidos
                em consumação. Continua depois da publicidade O ambiente ainda é
                pet friendly, ou seja, os bichinhos poderão circular livremente
                pelo complexo.
                <br />
                <br />
                Os ingressos podem ser adquiridos pelos sites CEU - Asbac
                (Centro de Entretenimento Urbando) e Ingresso rápido, variando
                de acordo os lotes e as atrações.
              </h1>

              <div className="col-12 text-center mt-4 mb-1">
                <button className="btn btn-primary">Comprar agora </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

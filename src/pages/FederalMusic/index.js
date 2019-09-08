import React, { Component } from "react";
import img from "../../img/federal-clean.png";
import { Link } from "react-router-dom";

import "./style.css";

export default class FederalMusic extends Component {
  render() {
    return (
      <section style={{ paddingBottom: '50px' }} id="federal-music">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Federal Music 2020
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
                <br />
                Em 2020 essa sociedade transcendental se refugiou nos confins do
                oceano, e no submundo aquático se reuniram com a esperança de
                paz através da música, com uma identidade sonora própria e
                única, união com outros povos, aceitando as diferenças e
                evoluindo com amor. A diversidade e a união dos habitantes deram
                nome a esse reino fantástico: OMNIA E do fundo do mar, eles
                decidiram trazer uma mensagem de paz, amor, união e respeito
                entre todos os seres do universo.
                <br />
                <br /> Eles encontraram na música a maneira de tocas os corações
                e transmitir a mensagem. Três representantes vieram com a missão
                de disseminar essa mensagem: Altum, Spero e Unio. Venham fazer
                parte dessa missão e tragam sua contribuição de boas vibrações
                para essa celebração única. Sejam bem-vindos ao Federal Music
                2020
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

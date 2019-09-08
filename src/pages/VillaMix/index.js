import React, { Component } from "react";
import villa from "../../img/villa-clean.png";
import { Link } from "react-router-dom";

import "./style.css";

export default class VillaMix extends Component {
  render() {
    return (
      <section id="villa-mix">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Vila Mix Brasília 2020
            </h1>
          </div>
        </div>

        <div className="container pb-4">
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card">
                <img className="card-img-top" src={villa} alt="" />
              </div>
            </div>

            <div className="justify-content-center">
              <h2 id="title-desc">Descrição</h2>
              <h1 id="text-desc">
                <b id="bold">Local:</b> Centro de Entretenimento Urbano (CEU)
                Asbac.
                <br />
                <br /> Com o slogan ‘Música é Mix’ a edição 2020 do VillaMix
                Festival Brasília promete mais uma vez entrar para a história
                com um line-up de peso, uma mega estrutura e as maiores atrações
                musicais da atualidade, que vão do sertanejo à música eletrônica
                e do forró ao funk, reunindo em um só lugar grandes nomes como
                Jorge & Mateus, Gusttavo Lima, Wesley Safadão, Alok, Xand Avião,
                Simone & Simaria, Kevinho e JetLag e Jefferson Moraes.
                <br />
                <br /> Marcado para o dia 4 de maio, o VillaMix Festival vai
                ocupar pela primeira vez o espaço interno do Centro de
                Entretenimento Urbano (CEU) Asbac. Você não vai ficar de fora,
                né? Adquira já o seu ingresso!
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

import React, { Component } from "react";
import esporte from "../../../../img/esportes.png";
import restaurante from "../../../../img/restaurant.png";
import festivais from "../../../../img/festivais.png";
import culture from "../../../../img/cultura.png";
import diversao from "../../../../img/diversao.png";
import spa from "../../../../img/spa.png";
import "./style.css";

export default class SecondSection extends Component {
  render() {
    return (
      <section id="home-second-section">
        <div className="container ">
          <div className="col-12 ">
            <div className="row">
              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={esporte}></img>
                <small className="text-center">Esportes</small>
              </div>

              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={restaurante}></img>
                <small className="text-center">Restaurante</small>
              </div>

              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={festivais}></img>
                <small className="text-center">Festivais</small>
              </div>
            </div>

            <div className="row mt-3 ">
              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={culture}></img>
                <small className="text-center">Cultura</small>
              </div>

              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={diversao}></img>
                <small className="text-center">Diversão</small>
              </div>

              <div className="col-4 justify-content-center text-center">
                <img alt="" className="icon-expositive" src={spa}></img>
                <small className="text-center">Spa</small>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

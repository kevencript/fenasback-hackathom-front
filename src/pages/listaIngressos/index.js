import React, { Component } from "react";
import villa from "../../img/villa-clean.png";
import { Link } from "react-router-dom";

import "./style.css";

export default class listaIngressos extends Component {
  render() {
    return (
      <section id="lista-ingressos">
        <div id="fake-header">
          <div className="col-12">
            <h1 id="title-fake-header" className="text-center">
              Seus ingressos
            </h1>
          </div>
        </div>

        <div className="container pb-4">
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card col-12">
                <div className="row">
                  <div className="col-10">
                    <b>Villa Mix 2020</b>
                    <br />
                    Clique aqui para ver seu ingresso
                  </div>
                  <div className="col-2 ticket-icon my-auto">
                    <i class="fas fa-ticket-alt"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

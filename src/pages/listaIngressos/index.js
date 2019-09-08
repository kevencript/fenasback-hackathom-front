import React, { Component } from "react";
import villa from "../../img/villa.png";
import qrCodeVilla from "../../img/qr-code-villa.png";
import { Link } from "react-router-dom";

import "./style.css";

export default class listaIngressos extends Component {
  render() {
    return (
      <section id="lista-ingressos">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Seus ingressos
            </h1>
          </div>
        </div>

        <div className="container pb-4">

          {/* <!-- Modal --> */}
          <div class="modal fade" id="modalVilla" tabindex="-1" role="dialog" aria-labelledby="modalVillaTitle" aria-hidden="true">
            <div class="modal-dialog modal-dialog" role="document">
              <div style={{ width: '95%' }} class="modal-content mx-auto">
                <div class="modal-header">
                  <h5 class="modal-title" id="modalVillaTitle">Apresente na entrada</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  <img className="card-img-top" src={qrCodeVilla} alt="" />

                  <p><b>Local:</b>  Centro de Entretenimento Urbano (CEU)</p>
                  <p><b>Data:</b> 16 de julho de 2020, 18:00</p>
                </div>
                <div class="modal-footer">
                  <button style={{ backgroundColor: "#35337d" }} type="button" class="btn btn-secondary" data-dismiss="modal">Blz!</button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 ">
            <div className="row mb-5" data-toggle="modal" data-target="#modalVilla">
              <div className="card col-12">

                <div className="row p-1">
                  <div className="col-4 my-auto">
                    <img className="card-img-top" src={villa} alt="" />
                  </div>
                  <div className="col-8">
                    <b>Villa Mix 2020</b>
                    <br />
                    Clique aqui para ver seu ingresso
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

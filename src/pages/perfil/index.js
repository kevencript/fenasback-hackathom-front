import React, { Component } from "react";

import { Link } from "react-router-dom";

import img from "../../img/perfil-img.png";

import "./style.css";

export default class Perfil extends Component {
  render() {
    return (
      <section id="perfil">
        <div id="fake-header">
          <div className="col-12">
            <Link to="/home">
              <i class="fas fa-arrow-left"></i>
            </Link>{" "}
            <h1 id="title-fake-header" className="text-center">
              Meu perfil
            </h1>
            <div className="justify-content-center text-center">
              <img alt="" className="profile-pic " src={img}></img>
              <br />
              <h5 className="text-center nome mt-1">
                Gabriel Braga <span class="badge badge-success">Associado</span>
              </h5>
              <h5 className="text-center email mt-1">kevencript@gmail.com</h5>
            </div>
          </div>
        </div>

        <div className="col-12 div-list">
          <ul class="list-group">
            <li class="list-group-item">Editar Perfil</li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
            <li class="list-group-item">Morbi leo risus</li>
            <li class="list-group-item">Porta ac consectetur ac</li>
            <li class="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </section>
    );
  }
}

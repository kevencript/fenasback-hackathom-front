import React, { Component } from "react";
import villa from "../../../../img/villa.png";
import funn from "../../../../img/funn.png";
import federal from "../../../../img/federal.png";

import "./style.css";
import { Link } from "react-router-dom";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="home-third-section">
        <div className="container ">
          <h1 id="title-third-sec"> Você não pode perder</h1>
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/villa-mix">
                  <img className="card-img-top" src={villa} alt="" />
                </Link>
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/funn-festival">
                  <img className="card-img-top" src={funn} alt="" />
                </Link>
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <Link to="/evento/federal-music">
                  <img className="card-img-top" src={federal} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

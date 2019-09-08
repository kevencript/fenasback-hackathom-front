import React, { Component } from "react";
import villa from "../../../../img/villa.png";
import funn from "../../../../img/funn.png"
import federal from "../../../../img/federal.png"

import "./style.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="home-third-section">
        <div className="container ">
          <h1 id="title-third-sec"> Você não pode perder</h1>
          <div className="col-12 ">
            <div className="row mb-5">
              <div className="card">
                <img
                  className="card-img-top"
                  src={villa}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <img
                  className="card-img-top"
                  src={funn}
                  alt="Card image cap"
                />
              </div>
            </div>

            <div className="row mb-5">
              <div className="card">
                <img
                  className="card-img-top"
                  src={federal}
                  alt="Card image cap"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import villa from "../../../../img/villa.png";

import "./style.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="home-third-section">
        <div className="container ">
          <div className="col-12">
            <div className="row">
              <div class="card">
                <img class="card-img-top" src={villa} alt="Card image cap" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

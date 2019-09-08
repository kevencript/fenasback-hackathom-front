import React, { Component } from "react";
import "./style.css";

export default class FirstSection extends Component {
  render() {
    return (
      <section id="home-first-section">
        <div className="container mx-auto">
          <div className="col-12 ">
            <div className="row justify-content-center">
              <i class="fas fa-search" id="icon-search"></i>
              <input type="text" class="mb-5"></input>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

import React, { Component } from "react";
import "./style.css";

export default class FirstSection extends Component {
  render() {
    return (
      <section id="main-banner">
        {/* Lado DIREITO*/}
        <div className="col-md-6 col-sm-12 generalTexts">
          <h1 className="promo-title"></h1>
        </div>
        {/* Aqui está a divisória em formato de onda */}
        <section id="wave-div">
          <svg
            id="bottom-wave"
            data-name="Camada 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1366 160.49"
          >
            <path
              className="cls-1"
              d="M1234,54c-88.86-7.43-117.44,72.78-216,81-109.1,9.1-129.32-83.21-245-81-104.8,2-116.49,82.44-224,83-105.4.55-120.68-76.62-217-68-93.94,8.41-120.61,85.51-207,81C69.79,147.12,26.71,112.81,0,86V214H1366V131C1338.66,99.88,1293.58,59,1234,54Z"
              transform="translate(0 -53.51)"
            />
          </svg>
        </section>
      </section>
    );
  }
}

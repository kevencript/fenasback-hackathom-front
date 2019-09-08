import React, { Component } from "react";
import { Link } from 'react-router-dom'
import sandson from '../../../../img/sandson.png'
import marta from '../../../../img/marta.png'
import gabriel from '../../../../img/gabriel.png'
import joao from '../../../../img/joao.png'
import ze from '../../../../img/ze.png'

import "./style.css";

export default class ThirdSection extends Component {
  render() {
    return (
      <section id="third-sec">
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

        {/* Aqui ficara o conteúdo */}
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-6 col-sm-12 text-center mb-3">
              <h1 className="title mb-3">A equipe por trás</h1>
              <img src={sandson} alt="" />
              <p style={{ fontSize: "23px", color: "#fff" }}>
                Sandson Azevedo
                <br />
                Coordenador da Pré-Aceleradora OopS na UDF Centro Universitário
                <br />
                <a target='_blank' style={{ color: '#fff', fontSize: '30px' }} className="text-decoration-none" href="https://www.linkedin.com/in/sandson-azevedo/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>

              <img src={marta} alt="" />
              <p style={{ fontSize: "23px", color: "#fff" }}>
                Marta Soares
                <br />
                Bacharel em administração | Discente de Análise e Desenvolvimento de Sistemas
                <br />
                <a
                  target='_blank'
                  style={{ color: '#fff', fontSize: '30px' }}
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/marta-soares-87045bb8/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>

              <img src={gabriel} alt="" />
              <p style={{ fontSize: "23px", color: "#fff" }}>
                Gabriel Braga Costa
                <br />
                Desenvolvedor full stack | Designer Gráfico
                <br />
                <a
                  target='_blank'
                  style={{ color: '#fff', fontSize: '30px' }}
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/gabriel-bragavera/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>

              <img src={joao} alt="" />
              <p style={{ fontSize: "23px", color: "#fff" }}>
                João Brito
                <br />
                Desenvolvedor web
                <br />
                <a
                  target='_blank'
                  style={{ color: '#fff', fontSize: '30px' }}
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/jo%C3%A3o-brito-35596216a/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>

              <img src={ze} alt="" />
              <p style={{ fontSize: "23px", color: "#fff" }}>
                José Lucas
                <br />
                Desenvolvedor full stack na Nestin
                <br />
                <a
                  target='_blank'
                  style={{ color: '#fff', fontSize: '30px' }}
                  className="text-decoration-none"
                  href="https://www.linkedin.com/in/jos%C3%A9-lucas-r-9aa257119/">
                  <i class="fab fa-linkedin"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

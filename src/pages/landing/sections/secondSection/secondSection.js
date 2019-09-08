import React, { Component } from 'react';

import './style.css';

import logo from '../../../../img/logo2.png';

export default class SecondSection extends Component {
  render() {
    return (
      <section id="second-sec">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <img className="logotipo" alt="" src={logo}></img>
              <h1 className="title">Venha conhecer</h1>
              <p className="sub-title">
                Inspirado nos grandes Centros de Entretenimento do mundo, O CEU
                – Centro de Entretenimento Urbano ASBAC, traz uma proposta
                moderna e é o único lugar onde o gosto de todos os membros da
                família e o entretenimento onde todos podem desfrutar se cruzam.
                É tudo o que você está procurando. É qualquer coisa, menos
                comum. Se você ainda nunca esteve no céu, essa é sua
                oportunidade.
                <br />
                <br />
                Restaurantes, lanchonetes, grandes festas e festivais, lojas,
                centro estético, atrações culturais: teatro, cinema ao ar livre,
                karaokê, espetáculos, casa noturna, parque aquático,
                churrasqueiras, espaço para prática esportiva, escolinhas de
                esporte, eSports, air-soft, e muito mais vem por aí.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

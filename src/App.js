import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components import
import Header from "./components/Header/index";
import LandingPage from "./pages/landing/index";
import HomePage from "./pages/home/index";
import VillaMix from "./pages/VillaMix/index";
import FunnFestival from "./pages/FunnFestival/index";
import Footer from "./components/Footer";
import perfil from "./pages/perfil";
import FederalMusic from "./pages/FederalMusic";
import listaIngressos from "./pages/listaIngressos";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/evento/villa-mix" component={VillaMix} />
          <Route path="/evento/funn-festival" component={FunnFestival} />
          <Route path="/evento/federal-music" component={FederalMusic} />
          <Route path="/profile" component={perfil} />
          <Route exact path="/profile/ingressos" component={listaIngressos} />

          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

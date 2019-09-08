import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

//components import
import Header from "./components/Header/index";
import LandingPage from "./pages/landing/index";
import HomePage from "./pages/home/index";
import VillaMix from "./pages/VillaMix/index";
import Footer from "./components/Footer/index";

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Header />
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={HomePage} />
          <Route path="/evento/villa-mix" component={VillaMix} />
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

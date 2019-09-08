import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";

class Footer extends Component {
  // JSX stuff
  render() {
    return (
      <section id="footer">
        <footer className="page-footer font-small blue pt-4">

          {/* Copyright */}
          <div className="footer-copyright text-center py-3">
            © 2019 Copyright - Centro de Entretenimento Urbano Asbac
          </div>
          {/* Copyright */}
        </footer>
      </section>
    );
  }
}

export default Footer;

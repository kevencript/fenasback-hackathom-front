import React, { Component } from "react";

import "./style.css";

class Footer extends Component {
  // JSX stuff
  render() {
    return (
      <section id="footer">
        <footer className="page-footer font-small blue ">
          {/* Copyright */}
          <div className="footer-copyright text-center  py-3">
            © 2019 Copyright - NewIT
          </div>
          {/* Copyright */}
        </footer>
      </section>
    );
  }
}

export default Footer;

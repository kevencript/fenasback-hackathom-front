import React, { Component } from "react";
import { Link } from "react-router-dom";

import classnames from "classnames";
import "./style.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      navbarShadow: false,
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  handleScrollVisibility() {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  }

  handleScrollShadow() {
    const navStatus = document.documentElement.scrollTop > 30;
    this.setState({ navbarShadow: navStatus });
  }

  componentDidMount() {
    window.onscroll = () => [
      this.handleScrollShadow(),
      this.handleScrollVisibility()
    ];
  }

  // JSX stuff
  render() {
    return (
      <section id="nav-bar">
        <nav
          className={classnames(
            "navbar",
            { "navbar--shadow": this.state.navbarShadow },
            { "navbar--hidden": !this.state.visible },
            "navbar-expand-lg"
          )}
        >
          <div className="container ">
            <div className="mx-auto">
              <ul className="nav justify-content-between ">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">
                    <i class="fas fa-info-circle"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/assosiados">
                    <i className="fas fa-users"></i>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link active" to="/home">
                    <i className="fas fa-home"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile/ingressos">
                    <i class="fas fa-ticket-alt"></i>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">
                    <i class="fas fa-user-cog"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default Header;

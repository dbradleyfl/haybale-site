import React, {Component} from 'react';

export default class Navbar extends Component {
    toggleNavMenu () {
      document.querySelector(".nav-toggle").classList.toggle("is-active");
      document.querySelector(".nav-menu").classList.toggle("is-active");
    }

    render() {
        return (
            <nav id="home" className="nav">
                <div className="container">
                    <div className="nav-left">
                        <a className="nav-item">
                            <h3 className="title is-3">Haybale</h3>
                        </a>
                    </div>

                    <span className="nav-toggle" onClick={this.toggleNavMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </span>

                    <div className="nav-right nav-menu">
                        <a className="nav-item" href="#home">
                            Home
                        </a>
                        <a className="nav-item" href="#features-section">
                            Features
                        </a>

                        <span className="nav-item">
                            <a className="button is-primary" href="#download-section">
                                <span className="icon">
                                    <i className="fa fa-download"></i>
                                </span>
                                <span>Download</span>
                            </a>
                        </span>
                    </div>
                </div>
            </nav>
        )
    }
}

import React, {Component} from 'react';

import MacbookImage from '../imgs/macbook.png';
import Navbar from './Navbar';
import DownloadSection from './DownloadSection';

export default class HeroSection extends Component {
    render() {
        return (
          <section className="hero is-fullheight">
            <div className="hero-head">
              <Navbar />
            </div>
            <div className="hero-body" style={{marginBottom: -50}}>
              <div className="container">
                <figure className="has-text-centered">
                  <img src={MacbookImage} alt="macbook"/>
                  <iframe style={{position:"absolute", top:0, left: 0, right: 0, bottom: 30, margin: "auto", width: "75%", height: "80%", maxWidth: "787px", maxHeight: "500px"}} is src="//www.youtube.com/embed/znhc-yQ6g0o" allowfullscreen></iframe>
                </figure>
              </div>
            </div>
            <div className="hero-foot">
              <DownloadSection />
            </div>
          </section>
        )
    }
}

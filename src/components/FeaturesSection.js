import React, {Component} from 'react';

export default class FeaturesSection extends Component {
    render() {
        return (
          <section id="features-section" className="hero is-warning is-medium">
            <div className="hero-body">
              <div className="container">
                <div className="columns">
                  <div className="column is-third has-text-centered">
                    <span className="icon is-large" style={{margin: "30px auto"}}>
                      <i className="fa fa-desktop" style={{fontSize: "4.5em"}}></i>
                    </span>
                    <h3 className="title is-3">Native Haystack.tv</h3>
                    <h4 className="subtitle is-4">Wrapping <a href="http://www.haystack.tv/" target="_blank" className="button is-danger" style={{color: "white"}}>Haystack.tv</a> in a native application means that Haystack has its own place on your computer. It has its own icon, and its own window outside from your browser window. It is readily available to launch.</h4>
                  </div>
                  <div className="column is-third has-text-centered">
                    <span className="icon is-large" style={{margin: "30px auto"}}>
                      <i className="fa fa-arrows-alt" style={{fontSize: "4.5em"}}></i>
                    </span>
                    <h3 className="title is-3">Great Fullscreen UI</h3>
                    <h4 className="subtitle is-4">Haybale has a slick looking fullscreen user interface. It allows you to skip, pause, and play any video that Haystack plays while maintaining a fullscreen view. This means you never again have to exit fullscreen to skip to the next video.</h4>
                  </div>
                  <div className="column is-third has-text-centered">
                    <span className="icon is-large" style={{margin: "30px auto"}}>
                      <i className="fa fa-youtube-play" style={{fontSize: "4.5em"}}></i>
                    </span>
                    <h3 className="title is-3">Enables Media Keys</h3>
                    <h4 className="subtitle is-4">Haybale also enables you to control your Haystack playback with the pause, play, previous, and skip media keys on your keyboard. Again, allowing you to maintain a fullscreen view while watching Haystack on your computer.</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

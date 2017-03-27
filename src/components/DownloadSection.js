import React, {Component} from 'react';

export default class DownloadSection extends Component {
    render() {
        return (
          <section id="download-section" className="section has-text-centered">
              <h2 className="title is-3">Download</h2>
              <div className="columns">
                <div className="column is-2 has-text-centered is-offset-2">
                  <a href="https://github.com/dbradleyfl/haybale-site/releases" className="button is-danger is-large" target="_blank">
                    <span className="icon is-medium">
                      <i className="fa fa-windows"></i>
                    </span>
                    <span>Windows</span>
                  </a>
                </div>
                <div className="column is-2 is-offset-1 has-text-centered">
                  <a href="https://github.com/dbradleyfl/haybale-site/releases" className="button is-info is-large" target="_blank">
                    <span className="icon is-medium">
                      <i className="fa fa-apple"></i>
                    </span>
                    <span>Mac</span>
                  </a>
                </div>
                <div className="column is-2 is-offset-1 has-text-centered">
                  <a href="https://github.com/dbradleyfl/haybale-site/releases" className="button is-large is-success" target="_blank">
                    <span className="icon is-medium">
                      <i className="fa fa-linux"></i>
                    </span>
                    <span>Linux</span>
                  </a>
                </div>
              </div>
          </section>
        )
    }
}

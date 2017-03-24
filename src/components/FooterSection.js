import React, {Component} from 'react';

export default class FooterSection extends Component {
    render() {
        return (
          <footer className="footer">
            <div className="container">
              <div className="content has-text-centered">
                <p>
                  <strong>Haybale</strong> by <a href="http://devonbradley.com">Devon Bradley</a>. The website content
                  is licensed <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/">CC ANS 4.0</a>.
                </p>
                <p>
                  <a className="icon" href="https://github.com/dbradleyfl/haystack-site">
                    <i className="fa fa-github"></i>
                  </a>
                </p>
              </div>
            </div>
          </footer>
        )
    }
}

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';
import { SocialList } from '../../components';

/**
 * Renders About view with photo, brief intro, contact information and social links at "/about/" url.
 */
class About extends Component {
  static propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    address: PropTypes.string,
  };

  static defaultProps = {
    className: '',
    name: Consts.name, // 'Anton Karpenko';
    email: Consts.email, // 'i@karpolan.com';
    phone: Consts.phone, // '+421 919 321 977';
    address: Consts.address, // 'Nivy, Ružinov, Bratislava, SLOVAKIA';
  };

  /* global process, window */
  render() {
    const urlPicture = `${process.env.PUBLIC_URL}/img/about/`;
    const domain = window.location.hostname.toUpperCase();
    const { className } = this.props;
    const { name, email, phone, address } = this.props;
    return (
      <>
        <main>
          <div className={`row about about-main ${className}`}>
            <div className="col-md-6 text-center">
              <section className="photo">
                <picture>
                  <source className="media-xl" media="(min-width: 1200px)" srcSet={`${urlPicture}960.jpg`} />
                  <source className="media-lg" media="(min-width: 992px)" srcSet={`${urlPicture}720.jpg`} />
                  <source className="media-md" media="(min-width: 768px)" srcSet={`${urlPicture}640.jpg`} />
                  <source className="media-sm" media="(min-width: 576px)" srcSet={`${urlPicture}640.jpg`} />
                  <img className="img-fluid rounded" src={`${urlPicture}480.jpg`} alt={name} />
                </picture>
              </section>
            </div>

            <div className="col-md-6">
              <div className="offset-md-1">
                <h6 className="d-none d-md-block">Hello everybody, I am</h6>
                <h3>{name}</h3>
                <h4>Software Engineer</h4>
                <p>
                  I participated in the creation of many public products, computer games, internal IT projects, various
                  libraries and tools for other software developers. I have been coding since 1994, and still love it :)
                </p>

                <section className="contacts">
                  <p>
                    <i className="far fa-calendar fa-2x mr-3 align-middle" />
                    <time className="align-middle" dateTime="1977-04-23 02:15">
                      April 23, 1977
                    </time>
                  </p>
                  <p>
                    <i className="fas fa-phone fa-2x mr-3 align-middle" />
                    <a className="align-middle" rel="noopener noreferrer" href={`tel:${phone}`}>
                      {phone}
                    </a>
                  </p>
                  <p>
                    <i className="far fa-envelope fa-2x mr-3 align-middle" />
                    <a
                      className="align-middle"
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`mailto:${email}?subject=From+${domain}+About`}
                    >
                      {email}
                    </a>
                  </p>
                  <div>
                    <i className="fas fa-home fa-2x mr-3 align-middle" />
                    <address className="d-inline">{address}</address>
                    <p />
                  </div>
                </section>

                <section className="social">
                  <p>
                    <span>Follow me on any social network you want. I am </span>
                    <b>KARPOLAN</b>
                    <span> everywhere.</span>
                  </p>
                  <SocialList />
                </section>
              </div>
            </div>
          </div>
        </main>

        <section>
          <div className={`row about about-aside ${className}`}>
            <div className="col-12 mt-3">
              <h4>Tech specification</h4>
              <section className="tech">
                <p>This web-site is built using the following technologies and frameworks:</p>
                <ul>
                  <li>
                    <b>
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                      >
                        JavaScript
                      </a>
                    </b>
                    <span> - is the only programming language used.</span>
                  </li>
                  <li>
                    <b>
                      <a target="_blank" rel="noopener noreferrer" href="https://reactjs.org">
                        React
                      </a>
                    </b>
                    <span> - front-end is Single Page Application (SPA) based on </span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/facebook/create-react-app">
                      Create React App
                    </a>
                    <span> template.</span>
                  </li>
                  <li>
                    <b>
                      <a target="_blank" rel="noopener noreferrer" href="https://getbootstrap.com">
                        Bootstrap
                      </a>
                    </b>
                    <span> - visual styles are provided by </span>
                    <a target="_blank" rel="noopener noreferrer" href="https://react-bootstrap.github.io">
                      React Bootstrap
                    </a>
                    <span> library.</span>
                  </li>
                  <li>
                    <b>
                      <a target="_blank" rel="noopener noreferrer" href="https://www.json.org">
                        JSON
                      </a>
                    </b>
                    <span> - all data is stored in static .json files.</span>
                  </li>
                  <li>
                    <b>
                      <a target="_blank" rel="noopener noreferrer" href="https://git-scm.com">
                        Git
                      </a>
                    </b>
                    <span> - the version control and CI/CD is powerd by </span>
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/karpolan/">
                      GitHub
                    </a>
                    .
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default About;

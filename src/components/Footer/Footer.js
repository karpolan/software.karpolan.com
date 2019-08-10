import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Consts } from '../../storage';

/**
 * Rendrs the Footer with different content depending on screen size.
 */
const Footer = (props) => {
  const { className, forceShow, name, linkedin, facebook, twitter, github } = props;
  const classShowHideSm = forceShow ? 'd-block' : 'd-none d-sm-block';
  const classShowHideMd = forceShow ? 'd-block' : 'd-none d-md-block';
  return (
    <footer className={`footer ${className}`}>
      <div className={`container small pt-3 bg-light ${classShowHideSm}`}>
        <div className="row">
          <div className={`col-md-3 ${classShowHideMd}`}>
            <ul className="list-unstyled">
              <li className="">
                <Link to="/" title={`Software created by ${name}`}>
                  Software
                </Link>
              </li>
              <li className="">
                <a href="https://websites.karpolan.com" title={`Websites created by ${name}`}>
                  Websites
                </a>
              </li>
              <li className="">
                <a href="https://services.karpolan.com" title={`Services created by ${name}`}>
                  Services
                </a>
              </li>
            </ul>
          </div>

          {/* <div className={`col-md-2 ${classShowHideMd}`}>
            <ul className="list-unstyled">
              <li className="">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://karpolan.com"
                  title={`Devices created by ${name}`}
                >
                  Devices
                </a>
              </li>
              <li className="">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://karpolan.com/cool-things/"
                  title={`Things created by ${name}`}
                >
                  Things
                </a>
              </li>
              <li className="">
                <a target="_blank" rel="noopener noreferrer" href="https://karpolan.com" title={`Invetions by ${name}`}>
                  Inventions
                </a>
              </li>
            </ul>
          </div> */}

          <div className={`col-md-3 ${classShowHideMd}`}>
            <ul className="list-unstyled">
              <li className="">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://book-product.karpolan.com"
                  title={`Books by ${name}`}
                >
                  Books
                </a>
              </li>
              <li className="">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://karpolan.blogspot.com"
                  title={`Articles by ${name}`}
                >
                  Articles
                </a>
              </li>
              <li className="">
                <a target="_blank" rel="noopener noreferrer" href="https://blog.karpolan.com" title={`Blog by ${name}`}>
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="social col-md-6 text-center text-md-right">
            <ul className={`list-unstyled list-inline social-icons ${classShowHideMd}`}>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href={linkedin} title={`${name} on LinkedIn`}>
                  <i className="fab fa-linkedin fa-2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href={facebook} title={`${name} on Facebook`}>
                  <i className="fab fa-facebook fa-2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href={twitter} title={`${name} on Twitter`}>
                  <i className="fab fa-twitter fa-2x" />
                </a>
              </li>
              <li className="list-inline-item">
                <a target="_blank" rel="noopener noreferrer" href={github} title={`${name} on GitHub`}>
                  <i className="fab fa-github fa-2x" />
                </a>
              </li>
            </ul>

            <div className={`copyright pb-3 ${classShowHideSm}`}>
              Copyright &copy; 1994-
              <span>{new Date().getFullYear()} </span>
              <a target="_blank" rel="noopener noreferrer" href="https://karpolan.com/">
                KARPOLAN
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  forceShow: PropTypes.bool,
  name: PropTypes.string,
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  github: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
  forceShow: false,
  name: Consts.name, // 'Anton Karpenko'
  linkedin: Consts.linkedin,
  facebook: Consts.facebook,
  twitter: Consts.twitter,
  github: Consts.github,
};

export default Footer;

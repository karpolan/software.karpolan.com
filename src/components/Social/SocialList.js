import React from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';

/**
 * Renders <ul> with social icons
 */
function SocialList(props) {
  const { className, name, linkedin, facebook, twitter, youtube, instagram, github, slideshare } = props;
  return (
    <ul className={`social list-unstyled list-inline text-center ${className}`}>
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
        <a target="_blank" rel="noopener noreferrer" href={youtube} title={`${name} on YouTube`}>
          <i className="fab fa-youtube fa-2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" rel="noopener noreferrer" href={instagram} title={`${name} on Instagram`}>
          <i className="fab fa-instagram fa-2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" rel="noopener noreferrer" href={slideshare} title={`${name} on SlideShare`}>
          <i className="fab fa-slideshare fa-2x" />
        </a>
      </li>
      <li className="list-inline-item">
        <a target="_blank" rel="noopener noreferrer" href={github} title={`${name} on GitHub`}>
          <i className="fab fa-github fa-2x" />
        </a>
      </li>
    </ul>
  );
}

SocialList.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  linkedin: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  youtube: PropTypes.string,
  instagram: PropTypes.string,
  github: PropTypes.string,
  slideshare: PropTypes.string,
};

SocialList.defaultProps = {
  className: '',
  name: Consts.name, //'Anton Karpenko',
  linkedin: Consts.linkedin,
  facebook: Consts.facebook,
  twitter: Consts.twitter,
  youtube: Consts.youtube,
  instagram: Consts.instagram,
  github: Consts.github,
  slideshare: Consts.slideshare,
};

export default SocialList;

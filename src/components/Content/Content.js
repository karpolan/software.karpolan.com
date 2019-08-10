import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper for content modules (articles, sidebar, etc.)
 */
function Content(props) {
  const { className = '', children } = props;
  return <div className={`container py-3 ${className}`}>{children}</div>;
}

Content.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Content.defaultProps = {
  className: '',
  children: null,
};

export default Content;

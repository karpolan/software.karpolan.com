import React from 'react';
import PropTypes from 'prop-types';

/**
 * Wrapper for content modules (articles, sidebar, etc.)
 */
function content(props) {
	const { className = '', children} = props;
 	return (
		<div className={`container bg-secondary ${className}`}>
			{children}	
		</div>
	)
};

content.propTypes = {
	className: PropTypes.string,
};

export default content;
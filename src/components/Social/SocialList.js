import React from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';

/**
 * Renders <ul> with social icons
 */
function socialList(props) {
	const { className = ''} = props;

	const name = props.name || Consts.name;    //  'Anton Karpenko';
	const linkedin = props.linkedin || Consts.linkedin;
	const facebook = props.facebook || Consts.facebook;
	const twitter = props.twitter || Consts.twitter;
	const youtube = props.youtube || Consts.youtube;
	const instagram = props.instagram || Consts.instagram;
	const github = props.github || Consts.github;
	const slideshare = props.slideshare || Consts.slideshare;

	return (
		<ul className={`social list-unstyled list-inline text-center ${className}`}>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={linkedin} title={name + ' on LinkedIn'}><i className="fab fa-linkedin fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={facebook} title={name + ' on Facebook'}><i className="fab fa-facebook fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={twitter} title={name + ' on Twitter'}><i className="fab fa-twitter fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={youtube} title={name + ' on YouTube'}><i className="fab fa-youtube fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={instagram} title={name + ' on Instagram'}><i className="fab fa-instagram fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={slideshare} title={name + ' on SlideShare'}><i className="fab fa-slideshare fa-2x"></i></a></li>
			<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={github} title={name + ' on GitHub'}><i className="fab fa-github fa-2x"></i></a></li>
		</ul>
	)
}

socialList.propTypes = {
	className: PropTypes.string,
}

export default socialList;


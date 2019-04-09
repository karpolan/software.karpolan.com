import React from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';

/**
 * Footer shows different content depending on screen size. 
 */
function content(props) {
	const { className = '', forceShow = false} = props;

	const name = props.name || Consts.name;    //  'Anton Karpenko';
	const linkedin = props.linkedin || Consts.linkedin;
	const facebook = props.facebook || Consts.facebook;
	const twitter = props.twitter || Consts.twitter;
	const github = props.github || Consts.github;

	const classShowHideSm = forceShow ? 'd-block' : 'd-none d-sm-block';
	const classShowHideMd = forceShow ? 'd-block' : 'd-none d-md-block';
 	return (
		<footer className={`footer ${className}`}>
			<div className={`container small pt-3 bg-light ${classShowHideSm}`}>
				<div className="row">

					<div className={`col-md-2 ${classShowHideMd}`}>
						<ul className="list-unstyled">
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://websites.karpolan.com" title={'Websites created by ' + name}>Websites</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://software.karpolan.com" title={'Software created by ' + name}>Software</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://software.karpolan.com" title={'Services created by ' + name}>Services</a></li>
						</ul>
					</div>

					<div className={`col-md-2 ${classShowHideMd}`}>
						<ul className="list-unstyled">
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.com" title={'Devices created by ' + name}>Devices</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.com" title={'Things created by ' + name}>Things</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.com" title={'Invetions by ' + name}>Inventions</a></li>
						</ul>
					</div>

					<div className={`col-md-2 ${classShowHideMd}`}>
						<ul className="list-unstyled">
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.com" title={'Books by ' + name}>Books</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.blogspot.com" title={'Articles by ' + name}>Articles</a></li>
							<li className=""><a target="_blank" rel="noopener noreferrer" href="https://karpolan.blogspot.com" title={'Blog by ' + name}>Blog</a></li>
						</ul>
					</div>

					<div className="social col-md-6 text-center text-md-right">

						<ul className={`list-unstyled list-inline social-icons ${classShowHideMd}`}>
							<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={linkedin} title={name + ' on LinkedIn'}><i className="fab fa-linkedin fa-2x"></i></a></li>
							<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={facebook} title={name + ' on Facebook'}><i className="fab fa-facebook fa-2x"></i></a></li>
							<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={twitter} title={name + ' on Twitter'}><i className="fab fa-twitter fa-2x"></i></a></li>
							<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={github} title={name + ' on GitHub'}><i className="fab fa-github fa-2x"></i></a></li>
						</ul>

						<div className={`copyright pb-3 ${classShowHideSm}`}>
							Copyright &copy; 1994-{ new Date().getFullYear() + ' '}
							<a target="_blank" rel="noopener noreferrer" href="https://karpolan.com/">KARPOLAN</a>
						</div>

					</div>

				</div>
			</div>
		</footer>
	)
};

content.propTypes = {
	className: PropTypes.string,
	forceShow: PropTypes.bool
};

export default content;
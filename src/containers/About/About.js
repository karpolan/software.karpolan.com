import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';

/**
 * Renders About block with photo, brief intro, contact information and social links
 */
class About extends Component {
	static propTypes = {
		className: PropTypes.string,
		name: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string,
	}

	render() {
		const urlPicture = process.env.PUBLIC_URL + '/img/about/';
		const domain = window.location.hostname.toUpperCase();
	
		const name = this.props.name || Consts.name;    //  'Anton Karpenko';
		const email = this.props.email || Consts.email; // 'i@karpolan.com';
		const phone = this.props.phone || Consts.phone; //  '+38 093 394-48-15';
		const linkedin = this.props.linkedin || Consts.linkedin;
		const facebook = this.props.facebook || Consts.facebook;
		const twitter = this.props.twitter || Consts.twitter;
		const youtube = this.props.youtube || Consts.youtube;
		const instagram = this.props.instagram || Consts.instagram;
		const github = this.props.github || Consts.github;
		const slideshare = this.props.slideshare || Consts.slideshare;

		return (
			<div className={`container-fluid about ${this.props.className}`}>
				<div className="row">

					<div className="col-md-6 text-center">
						<picture>
							<source className="media-xl" media="(min-width: 1200px)" srcSet={urlPicture + "960.jpg"} />
							<source className="media-lg" media="(min-width: 992px)" srcSet={urlPicture + "720.jpg"} />
							<source className="media-md" media="(min-width: 768px)" srcSet={urlPicture + "640.jpg"} />
							<source className="media-sm" media="(min-width: 576px)" srcSet={urlPicture + "640.jpg"} />
							<img className="img-fluid rounded" src={urlPicture + "480.jpg"} alt={name}/>
						</picture>
					</div>

					<div className="col-md-6">
						<div className="offset-md-1">

							<h6 className="d-none d-md-block">Hello everybody, I am</h6>
							<h3>{name}</h3>
							<h4>Software Engineer</h4>
							<p>
								I participated in the creation of many public products, computer games, 
								internal IT projects, various libraries and tools for other software developers. 
								I have been coding since 1994, and still love it :)
							</p>

							<div className="contacts">
								<p>
									<i className="far fa-calendar fa-2x mr-3 align-middle"></i> 
									<time className="align-middle" dateTime="1977-04-23 02:15">April 23, 1977</time>
								</p>
								<p>
									<i className="fas fa-phone fa-2x mr-3 align-middle"></i> 
									<a className="align-middle" rel="noopener noreferrer" href={`tel:${phone}`}>{phone}</a>
								</p>
								<p>
									<i className="far fa-envelope fa-2x mr-3 align-middle" ></i> 
									<a className="align-middle" target="_blank" rel="noopener noreferrer" href={`mailto:${email}?subject=From+${domain}+About`}>{email}</a>
								</p>
								<div>
									<i className="fas fa-home fa-2x mr-3 align-middle"></i> 
									<address className="d-inline">Obolon, Kyiv, UKRAINE</address>
									<p></p>
								</div>
							</div>

							<p>
								Follow me on any social network you want. I am <b>KARPOLAN</b> everywhere. 
							</p>	
							<ul className="list-unstyled list-inline social-icons text-center">
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={linkedin} title={name + ' on LinkedIn'}><i className="fab fa-linkedin fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={facebook} title={name + ' on Facebook'}><i className="fab fa-facebook fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={twitter} title={name + ' on Twitter'}><i className="fab fa-twitter fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={youtube} title={name + ' on YouTube'}><i className="fab fa-youtube fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={instagram} title={name + ' on Instagram'}><i className="fab fa-instagram fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={slideshare} title={name + ' on SlideShare'}><i className="fab fa-slideshare fa-2x"></i></a></li>
								<li className="list-inline-item"><a target="_blank" rel="noopener noreferrer" href={github} title={name + ' on GitHub'}><i className="fab fa-github fa-2x"></i></a></li>
							</ul>

						</div>
					</div>

				</div>
			</div>
		)
	}
}

export default About;

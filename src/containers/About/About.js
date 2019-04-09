import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consts } from '../../storage';
import { SocialList } from '../../components';

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

		return (
			<article className={`about ${this.props.className}`}>
				<div className="row">

					<div className="col-md-6 text-center">
						<section className="photo">
							<picture>
								<source className="media-xl" media="(min-width: 1200px)" srcSet={urlPicture + "960.jpg"} />
								<source className="media-lg" media="(min-width: 992px)" srcSet={urlPicture + "720.jpg"} />
								<source className="media-md" media="(min-width: 768px)" srcSet={urlPicture + "640.jpg"} />
								<source className="media-sm" media="(min-width: 576px)" srcSet={urlPicture + "640.jpg"} />
								<img className="img-fluid rounded" src={urlPicture + "480.jpg"} alt={name}/>
							</picture>
						</section>
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

							<section className="contacts">
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
							</section>

							<section className="social">
								<p>
									Follow me on any social network you want. I am <b>KARPOLAN</b> everywhere. 
								</p>	
								<SocialList />
							</section>

						</div>
					</div>

				</div>
			</article>
		)
	}
}

export default About;

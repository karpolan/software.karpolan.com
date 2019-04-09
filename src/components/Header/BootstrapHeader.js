import React from 'react';
import PropTypes from 'prop-types';

const bootstrapHeader = (props) => {
	return (
		<header>

			<nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-primary">
				<a className="navbar-brand" href="#"><strong>Software</strong></a>

				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Link</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#">Profile</a>
						</li>
					</ul>
				</div>
			</nav>

			<div className="view intro-2">
				<div className="full-bg-img">
					<div className="mask rgba-black-light flex-center">
						<div className="container text-center white-text">
							<div className="white-text text-center wow fadeInUp">
								<h2>This Navbar is fixed</h2>
								<h5>It will always stay visible on the top, even when you scroll down</h5>
								<br/>
								<p>Full page intro with background image will be always displayed in full screen mode, regardless
									of device </p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<nav class="navbar navbar-expand-lg navbar-light bg-light">
				<a class="navbar-brand" href="#">Navbar</a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse" id="navbarTogglerDemo02">
					<ul class="navbar-nav mr-auto mt-2 mt-lg-0">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link disabled" href="#">Disabled</a>
						</li>
					</ul>
					<form class="form-inline my-2 my-lg-0">
						<input class="form-control mr-sm-2" type="search" placeholder="Search" />
						<button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
					</form>
				</div>
			</nav>	

		</header>
	);
}

bootstrapHeader.propTypes = {

}

export default bootstrapHeader;

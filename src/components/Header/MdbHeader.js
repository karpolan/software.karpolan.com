import React from 'react'
import PropTypes from 'prop-types'

const mdbHeader = props => {
	return (
		<header>

			<nav class="navbar fixed-top navbar-expand-lg navbar-dark indigo">
				<a class="navbar-brand" href="#"><strong>Navbar</strong></a>
				<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto">
						<li class="nav-item active">
							<a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Link</a>
						</li>
						<li class="nav-item">
							<a class="nav-link" href="#">Profile</a>
						</li>
					</ul>
				</div>
			</nav>

			<div class="view intro-2">
				<div class="full-bg-img">
					<div class="mask rgba-black-light flex-center">
						<div class="container text-center white-text">
							<div class="white-text text-center wow fadeInUp">
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

		</header>
	);
}

mdbHeader.propTypes = {

}

export default mdbHeader

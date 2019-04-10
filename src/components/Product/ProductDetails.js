import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Carousel, Container, Col, Row } from 'react-bootstrap';

/**
 * Renders Product Details page using props as data
 */
const prouductDetails = (props) => {
	const { name, text, icon, images } = props;
	//	const contentLinks = (links) ? links.map((link, index) => <Card.Link key={index} as={Link} to={link.url}>{link.text}</Card.Link>) : null;

	const renderImages = (images) => {
		if (!Array.isArray(images) || images.length < 1) return null;

		const renderItems = images.map((item, index) => (
			<Carousel.Item>
				<Image key={index} className="d-block mx-auto" src={item} />
			</Carousel.Item>
		));

		return <Carousel>{renderItems}</Carousel>;
	}

	return (
		<React.Fragment>

			<Container>
				<Row>
					<Col className="name"><h1>{name}</h1></Col>
				</Row>
				<Row>
					<Col className="text">
						<Image className="float-left mr-2" src={icon} width="64" height="64" />
						{text}
					</Col>
				</Row>
				<Row>
					<Col className="images">
						{renderImages(images)}
					</Col>
				</Row>
				<Row>
					<Col className="buttons">
						[buttons and other actions here]
					</Col>
				</Row>
			</Container>

		</React.Fragment>
	)
}

prouductDetails.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	images: PropTypes.array,
}

export default prouductDetails;

import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel, Container, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import './Product.css';

/**
 * Renders Product Details page using props as data
 */
const prouductDetails = (props) => {
	const { name, text, icon, images, offers } = props;
	//	const contentLinks = (links) ? links.map((link, index) => <Card.Link key={index} as={Link} to={link.url}>{link.text}</Card.Link>) : null;

	/**
	 * Renders all images as Carousel
	 */
	const renderImages = () => {
		if (!Array.isArray(images) || images.length < 1) return null;

		const list = images.map((item, index) => (
			<Carousel.Item key={index}>
				<Image className="product-image" src={item} />
			</Carousel.Item>
		));

		return <Carousel indicators={false} interval={3000}>{list}</Carousel>;
	} // renderImages()

	/**
	 * Renders all offers as Buttons
	 */
	const renderOffers = () => {
		if (!Array.isArray(offers) || offers.length < 1) return null;

		const BUTTON_VARIANTS = [
			"outline-primary",
			//			"outline-secondary",
			"outline-success",
			"outline-warning",
			"outline-danger",
			"outline-info",
		];

		const list = offers.map((item, index) => (
			<Button key={index} className="product-button"
				variant={BUTTON_VARIANTS[index % BUTTON_VARIANTS.length]}
				href={item.url}
				target="_blank" rel="noopener noreferrer"
			>{item.name}</Button>
		));

		return <ButtonToolbar>{list}</ButtonToolbar>;
	} // renderOffers()

	return (
		<React.Fragment>

			<Container>
				<Row>
					<Col className="name"><h1>{name}</h1></Col>
				</Row>
				<Row>
					<Col className="text">
						<Image className="product-icon" src={icon} />
						{text}
					</Col>
				</Row>
				<Row>
					<Col className="images">
						{renderImages()}
					</Col>
				</Row>
				<Row>
					<Col className="buttons">
						{renderOffers()}
					</Col>
				</Row>
			</Container>

		</React.Fragment>
	);
}

prouductDetails.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	images: PropTypes.array,
	offers: PropTypes.array,
}

export default prouductDetails;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image } from 'react-bootstrap';

/**
 * Renders single Product Card for Product List
 */
const productCard = (props) => {
	const { name, text, icon, link, imageUrl, subTitle, header, footer} = props;

	const contentImg = (imageUrl) ? <Card.Img variant="top" src={imageUrl} />: null;
	const contentHeader = (header) ? <Card.Header>{header}</Card.Header> : null;
	const contentSubTitle = (subTitle) ? <Card.Subtitle>{subTitle}</Card.Subtitle> : null;
	const contentFooter = (footer) ? <Card.Footer>{footer}</Card.Footer> : null;
//	const contentLinks = (links) ? links.map((link, index) => <Card.Link key={index} as={Link} to={link.url}>{link.text}</Card.Link>) : null;

	return (
		<React.Fragment>

			<Card>
				{contentImg}
				{contentHeader}
				<Card.Body>
					<Card.Title>{name}</Card.Title>
					{contentSubTitle}
					<Card.Text>
						<Link to={link}>
							<Image className="float-left mr-2" src={icon} width="64" height="64" />
						</Link>
						{text}
					</Card.Text>
					<Card.Link as={Link} to={link}>Details</Card.Link>
				</Card.Body>
				{contentFooter}
			</Card>

		</React.Fragment>
	)
}

productCard.propTypes = {
	name: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	link: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	imageUrl: PropTypes.string,
	header: PropTypes.string,
	footer: PropTypes.string,
}

export default productCard;

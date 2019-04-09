import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const productCard = (props) => {
	const { title, subTitle, text, imageUrl, links, header, footer} = props;

	const contentImg = (imageUrl) ? <Card.Img variant="top" src={imageUrl} />: null;
	const contentHeader = (header) ? <Card.Header>{header}</Card.Header> : null;
	const contentSubTitle = (subTitle) ? <Card.Subtitle>{subTitle}</Card.Subtitle> : null;
	const contentFooter = (footer) ? <Card.Footer>{footer}</Card.Footer> : null;
//	const contentLinks = (links) ? links.map((link, index) => <Card.Link key={index} as={Link} to={link.url}>{link.text}</Card.Link>) : null;
	const contentLinks = <div>[Links and Buttons here...]</div>

	return (
		<React.Fragment>

			<Card>
				{contentImg}
				{contentHeader}
				<Card.Body>
					<Card.Title>{title}</Card.Title>
					{contentSubTitle}
					<Card.Text>{text}</Card.Text>
					{contentLinks}
				</Card.Body>
				{contentFooter}
			</Card>

		</React.Fragment>
	)
}

productCard.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	subTitle: PropTypes.string,
	imageUrl: PropTypes.string,
	links: PropTypes.array,
	header: PropTypes.string,
	footer: PropTypes.string,
}

export default productCard;

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Card, Image, Button } from 'react-bootstrap';

/**
 * Renders a single Product Card for the Product List view.
 */
const ProductCard = (props) => {
  const { link, icon, name, description } = props;
  const content = description; // + ` ${text}`;

  return (
    <Card className="product-card">
      <Card.Body>
        <Card.Title>
          <Link to={link}>{name}</Link>
        </Card.Title>
        <Card.Text>
          <Link to={link}>
            <Image className="product-icon" src={icon} alt={name} />
          </Link>
          {content}
          <Link className="product-button" to={link}>
            <Button variant="outline-primary">Details</Button>
          </Link>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

ProductCard.propTypes = {
  link: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  // text: PropTypes.string,
};

ProductCard.defaultProps = {
  description: '',
  // text: '',
};

export default ProductCard;

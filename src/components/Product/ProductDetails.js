import React from 'react';
import PropTypes from 'prop-types';
import { Image, Carousel, Container, Col, Row, Button, ButtonToolbar } from 'react-bootstrap';
import './Product.css';

/**
 * Renders the Product Details "full page" using props as data
 */
const ProuductDetails = (props) => {
  const { name, icon, text, description, dates, images, offers } = props;

  /**
   * Renders all images as Carousel
   */
  const renderImages = () => {
    if (!Array.isArray(images) || images.length < 1) return null;

    const list = images.map((item, index) => (
      <Carousel.Item key={`carousel_item_${index}`}>
        <Image className="product-image" src={item} alt={`${name} image #${index + 1}`} />
      </Carousel.Item>
    ));

    return (
      <Carousel indicators={false} interval={3000}>
        {list}
      </Carousel>
    );
  }; // renderImages()

  /**
   * Renders all offers as Buttons
   */
  const renderOffers = () => {
    if (!Array.isArray(offers) || offers.length < 1) return null;

    const BUTTON_VARIANTS = [
      'outline-primary',
      // "outline-secondary",
      'outline-success',
      'outline-warning',
      'outline-danger',
      'outline-info',
    ];

    const list = offers.map((item, index) => {
      let openInNewWindowProps = {};
      if (item.url && item.url.includes('//')) {
        // Open only extarnal links in New Window
        openInNewWindowProps = {
          target: '_blank',
          rel: 'noopener noreferrer',
        };
      }
      return (
        <Button
          key={`button_${index}`}
          className="product-button"
          variant={BUTTON_VARIANTS[index % BUTTON_VARIANTS.length]}
          href={item.url}
          {...openInNewWindowProps}
        >
          {item.name}
        </Button>
      );
    });

    return <ButtonToolbar>{list}</ButtonToolbar>;
  }; // renderOffers()

  return (
    <>
      <Container>
        <Row>
          <Col className="name">
            <h1>{name}</h1>
            {dates && <h6 className="font-italic d-none d-sm-block">{dates}</h6>}
          </Col>
        </Row>
        <Row>
          <Col className="description">
            <Image className="product-icon" src={icon} alt={name} />
            {description}
          </Col>
        </Row>
        <Row>
          <Col className="images">{renderImages()}</Col>
        </Row>
        {text && (
          <Row>
            <Col className="text">{text}</Col>
          </Row>
        )}
        <Row>
          <Col className="buttons">{renderOffers()}</Col>
        </Row>
      </Container>
    </>
  );
};

ProuductDetails.propTypes = {
  icon: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  text: PropTypes.string,
  dates: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  offers: PropTypes.arrayOf(PropTypes.object),
};

ProuductDetails.defaultProps = {
  text: '',
  dates: null,
  images: null,
  offers: null,
};

export default ProuductDetails;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { CardColumns } from 'react-bootstrap';
import { ProductCard, Spinner } from '../../components';
import { Data } from '../../storage';

/**
 * Renders list of all products from "/data/" folder
 */
class ProductList extends Component {
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
    className: '',
  };

  state = {
    error: false,
    loaded: false,
    data: {},
  };

  componentDidMount() {
    // Load list of products form "/data/" folder into "data" state
    Data.getAllData(this.setState.bind(this), 'data');
  }

  render() {
    const { error, loaded, data } = this.state;
    const { className } = this.props;

    // Redirect to NotFound if data loading have been failed
    if (error === true) return <Redirect to="/404" />;

    // Show only Spinner if data was not loaded yet
    if (loaded === false) return <Spinner />;

    const renderCards = (productList) => {
      if (!Array.isArray(productList) || productList.length < 1) return null;

      const cards = productList.map((p) => {
        let icon = p.schema.image;
        if (Array.isArray(icon)) [icon] = icon; // Use first image as icon, Same as icon = icon[0]
        return (
          <ProductCard
            key={p.id}
            link={`/${p.id}`}
            icon={icon}
            name={p.schema.name}
            description={p.schema.slogan}
            text={p.schema.description}
          />
        );
      });
      return cards;
    }; // renderCards()

    return (
      <main>
        <article className={`product-list ${className}`}>
          <CardColumns>{renderCards(data)}</CardColumns>
        </article>
      </main>
    );
  }
}

export default ProductList;

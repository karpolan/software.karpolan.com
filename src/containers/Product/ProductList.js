import { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { CardColumns } from 'react-bootstrap';
import { ProductCard, Spinner } from '../../components';
import { Data } from '../../storage';

/**
 * Renders list of all products from "/data/" folder
 */
class ProductList extends Component {
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

  /**
   * Returns icon resource depending on schema props
   */
  // TODO: Refactor ro use shared utility function for Product and ProductList
  getIcon = (schema) => {
    let result = schema.logo; // Try to use "logo" property
    if (!result) result = schema.image; // If "logo" property is empty, use "image" property
    if (Array.isArray(result)) [result] = result; // In case of array use only first image. Same as result = result[0]
    return result;
  };

  render() {
    const { error, loaded, data } = this.state;
    const { className } = this.props;

    // Redirect to NotFound if the data loading have been failed
    if (error === true) return <Redirect to="/404" />;

    // Show only the Spinner if data was not loaded yet
    if (loaded === false) return <Spinner />;

    const renderCards = (productList) => {
      if (!Array.isArray(productList) || productList.length < 1) return null;

      const cards = productList.map((p) => (
        <ProductCard
          key={p.id}
          link={`/${p.id}/index.html`}
          icon={this.getIcon(p.schema)}
          name={p.schema.name}
          description={p.schema.slogan}
          text={p.schema.description}
        />
      ));
      return cards;
    }; // renderCards()

    return (
      <>
        <Helmet>
          <title>Software Products by KARPOLAN</title>
          <meta
            name="description"
            content="Products, projects, programs, tools, utilities and other software created by Anton Karpenko (aka KARPOLAN) personally or with his direct participation."
          />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        </Helmet>
        <main>
          <article className={`product-list ${className}`}>
            <CardColumns>{renderCards(data)}</CardColumns>
          </article>
        </main>
      </>
    );
  }
}

ProductList.propTypes = {
  className: PropTypes.string,
};

export default ProductList;

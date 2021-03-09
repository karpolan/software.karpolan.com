import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProductDetails, Spinner } from '../../components';
import { Data } from '../../storage';

/**
 * Renders Single Product page using data from "scheme.json" file in `/data/${id}/` folder.
 */
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      loaded: false,
      id: '',
      data: {
        name: '',
        description: '',
        image: [''],
      },
    };
  }

  componentDidMount() {
    // Load single product data form `/data/${id}/` folder into "data" state
    Data.getData(this.props.match.params.id, this.setState.bind(this), 'data');
  }

  /**
   * Returns icon resource depending on data props
   */
  getIcon() {
    const { data } = this.state;
    let result = data.logo; // Try to use "logo" property
    if (!result) result = data.image; // If "logo" property is empty, use "image" property
    if (Array.isArray(result)) [result] = result; // In case of array use only first image. Same as result = result[0]
    return result;
  }

  getDates() {
    const { data } = this.state;
    if (!data.productionDate) return null;

    let result = data.productionDate;
    if (data.releaseDate && data.releaseDate.length > 0) {
      result += ` \u2013 ${data.releaseDate}`;
    } else {
      result += ' \u2013 current time';
    }
    return result;
  }

  render() {
    const { error, loaded, id, data } = this.state;
    const { className } = this.props;

    // Redirect to NotFound if the data loading have been failed
    if (error === true) return <Redirect to="/404" />;

    // Show only the Spinner if data was not loaded yet
    if (loaded === false) return <Spinner />;

    // Create data object that will be passed as props to the ProductDetails component
    const propsToRender = {
      id,
      icon: this.getIcon(),
      name: data.name,
      description: data.slogan,
      text: data.description,
      dates: this.getDates(),
      images: data.image,
      offers: data.offers,
    };

    return (
      <>
        <Helmet>
          <title>{propsToRender.name} - Software by KARPOLAN</title>
          <meta name="description" content={`${propsToRender.name} - ${propsToRender.description}`} />
          <meta name="author" content="Anton Karpenko" />
          <link rel="shortcut icon" href={propsToRender.icon} />
          <link rel="canonical" href={`https://software.karpolan.com/${id}/index.html`} />
        </Helmet>
        <main>
          <article className={`product ${className}`}>
            <ProductDetails {...propsToRender} />
          </article>
          <script type="application/ld+json">{JSON.stringify(data)}</script>
        </main>
      </>
    );
  }
}

Product.propTypes = {
  className: PropTypes.string,
};

Product.defaultProps = {
  className: '',
};

export default Product;

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Navigate, useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ProductDetails, Spinner } from '../../components';
import { Data } from '../../storage';

function getDates(data) {
  if (!data?.productionDate) return null;

  let result = data?.productionDate;
  if (data?.releaseDate?.length > 0) {
    result += ` \u2013 ${data?.releaseDate}`;
  } else {
    result += ' \u2013 current time';
  }
  return result;
}

function getIcon(data) {
  let result = data?.logo; // Try to use "logo" property
  if (!result) result = data?.image; // If "logo" property is empty, use "image" property
  if (Array.isArray(result)) [result] = result; // In case of array use only first image. Same as result = result[0]
  return result;
}

/**
 * Renders Single Product page using data from "scheme.json" file in `/data/${id}/` folder.
 */
const Product = ({ className = '' }) => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true); // Loading by default
  const [data, setData] = useState({ name: '', description: '', image: [''] });

  useEffect(() => {
    setLoading(true);
    Data.getData(
      id,
      (dataFromApi) => {
        // console.log('dataFromApi:', dataFromApi);
        if (dataFromApi?.error) {
          return <Navigate to="/404" />;
        }
        setData(dataFromApi['data']);
        setLoading(false);
      },
      'data'
    );
  }, [id]);

  // Show only the Spinner if data was not loaded yet
  if (loading) return <Spinner />;

  // Create data object that will be passed as props to the ProductDetails component
  const propsToRender = {
    id,
    icon: getIcon(data),
    name: data.name,
    description: data.slogan,
    text: data.description,
    dates: getDates(data),
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
};

Product.propTypes = {
  className: PropTypes.string,
};

export default Product;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardColumns } from 'react-bootstrap';
import { ProductCard } from '../../components';
import { Data } from '../../storage';

/**
 * Renders list of all products from "/data/" folder
 */
export class ProductList extends Component {
	static propTypes = {
		className: PropTypes.string,
	}

	state = {
		data: {}
	}

	componentDidMount() {
		// Load list of products form "/data/" folder into "data" state
		Data.getAllData(this.setState.bind(this), 'data');
	}

	render() {

		const renderCards = (productList) => {
			if (!Array.isArray(productList)) return null;

			const cards = productList.map((p, index) => {
				let icon = p.schema.image;
				if (Array.isArray(icon)) icon = icon[0]; // Use first image as icon
				return <ProductCard key={index} name={p.schema.name} text={p.schema.description} icon={icon} link={`/product/${p.id}`} />;
			})
			return cards;
		}; // renderCards()

		return (
			<article className={`product-list ${this.props.className}`}>
				<CardColumns>
					{renderCards(this.state.data)}
				</CardColumns>
			</article>
		)
	}
}

export default ProductList;

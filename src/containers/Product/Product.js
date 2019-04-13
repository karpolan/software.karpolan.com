import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ProductDetails } from '../../components';
import { Data } from '../../storage';

/**
 * Renders Single Product page using data from "scheme.json" file in `/data/${id}/` folder.
 */
export class Product extends Component {
	static propTypes = {
		className: PropTypes.string,
	}

	state = {
		id: '',
		data: {
			name: '',
			description: '',
			image: ['']
		}
	}

	componentDidMount() {
		const { id } = this.props.match.params;
		// Load single product data form `/data/${id}/` folder into "data" state
		Data.getData(id, this.setState.bind(this), 'data');
	}

	render() {
		let icon = this.state.data.image;
		if (Array.isArray(icon)) icon = icon[0]; // Use first image as icon
		const productData = {
			id: this.state.id,
			name: this.state.data.name,
			text: this.state.data.description,
			icon: icon,
			images: this.state.data.image,
			offers: this.state.data.offers,
		};

		return (
			<article className={`product ${this.props.className}`}>
				<ProductDetails {...productData}/>
				<script type="application/ld+json">
					{JSON.stringify(this.state.data)}
				</script>
			</article>
		)
	}
	
}

export default Product;

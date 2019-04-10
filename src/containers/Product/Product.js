import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, CardColumns } from 'react-bootstrap';
import { ProductDetails } from '../../components';

export class Product extends Component {
	static propTypes = {
		className: PropTypes.string,
	}

	state = {
		id: '',
		name: 'Name',
		text: 'Text',
		icon: '/img/heart.svg',
		images: [
			'https://auto-mute.com/images/icon-256x256.png',
			'https://auto-mute.com/images/screenshot.png',
			'https://auto-mute.com/images/tray-menu.png',
			'https://auto-mute.com/images/screenshot_mac.png',
			'https://auto-mute.com/images/tray-menu_mac.png',
		],
	}

	render() {
		return (
			<article className={`product ${this.props.className}`}>

				<ProductDetails {...this.state}/>

			</article>
		)
	}
}

export default Product;

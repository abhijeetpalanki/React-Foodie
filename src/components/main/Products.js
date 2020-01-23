import React, { Component } from 'react';
import Navbar from './Navbar';
import Form from '../nested/Form';
import ProductList from '../nested/ProductList';

const API_KEY = '486fbf093e3f4211b0fc1a92ee1783f2';

export class Products extends Component {
	state = {
		products: []
	};

	getProducts = async (e) => {
		e.preventDefault();

		const productName = e.target.elements.formName.value;

		const api_call = await fetch(
			`https://api.spoonacular.com/food/products/search?query=${productName}&apiKey=${API_KEY}&number=12`
		);
		const data = await api_call.json();

		this.setState({ products: data.products });
	};

	render() {
		return (
			<div className="App">
				<Navbar />
				<Form formList={this.getProducts} />
				<ProductList products={this.state.products} />
			</div>
		);
	}
}

export default Products;

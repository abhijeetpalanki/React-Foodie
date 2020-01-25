import React, { Component } from 'react';
import Axios from 'axios';
import { FaShoppingBag } from 'react-icons/fa';
import Product from './Product';

class Products extends Component {
	state = {
		productTitle: '',
		heading: '',
		products: []
	};

	findProduct = async (e) => {
		e.preventDefault(); // To stop reloading after every click event

		// Get all products by search term
		Axios.get(
			`https://api.spoonacular.com/food/products/search?query=${this.state.productTitle}&apiKey=${process.env
				.REACT_APP_API_KEY}&number=12`
		)
			.then((res) => {
				this.setState({
					productTitle: '',
					heading: 'Search Results',
					products: res.data.products
				});
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { products, heading, productTitle } = this.state;

		return (
			<React.Fragment>
				{/* Search product */}
				<div className="card card-body mb-4 p-4">
					<h1 className="display-4 text-center">
						<FaShoppingBag /> Search For A Product
					</h1>
					<p className="lead text-center">
						Get the nutrition, caloric breakdown & ingredients for any product
					</p>
					<form onSubmit={this.findProduct}>
						<div className="form-group">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Product Title..."
								name="productTitle"
								value={productTitle}
								onChange={this.onChange}
							/>
						</div>
						<button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
							Get Products
						</button>
					</form>
				</div>

				{/* Each product iteration */}
				<h3 className="text-center mb-4">{heading}</h3>
				<div className="row">{products.map((item) => <Product key={item.id} product={item} />)}</div>
			</React.Fragment>
		);
	}
}

export default Products;

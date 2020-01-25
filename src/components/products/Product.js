import React from 'react';
import { Component } from 'react';
import Axios from 'axios';
import Information from './information/Information';
import { Link } from 'react-router-dom';

class Product extends Component {
	state = {
		information: []
	};

	render() {
		Axios.get(
			`https://api.spoonacular.com/food/products/${this.props.product.id}?apiKey=${process.env.REACT_APP_API_KEY}`
		).then((res) => {
			this.setState({ information: res.data });
		});

		return (
			<div className="col-md-4">
				<div className="card mb-4 shadow-sm">
					<img className="card-img-top" src={this.props.product.image} alt={this.props.product.title} />
					<div className="card-body">
						<h5 className="card-title">
							{this.props.product.title.length < 20 ? (
								`${this.props.product.title}`
							) : (
								`${this.props.product.title.substring(0, 25)}...`
							)}
						</h5>

						<Link to={`/product/information/${this.props.product.id}`}>
							<Information information={this.state.information} />
						</Link>
					</div>
				</div>
			</div>
		);
	}
}

export default Product;

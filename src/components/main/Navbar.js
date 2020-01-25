import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
				<Link to={`/`} className="navbar-brand">
					React Foodie
				</Link>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<Link to={`/`} className="nav-link">
							Recipes
						</Link>
					</li>
					<li className="nav-item">
						<Link to={`/products`} className="nav-link">
							Products
						</Link>
					</li>
				</ul>
			</nav>
		);
	}
}

export default Navbar;

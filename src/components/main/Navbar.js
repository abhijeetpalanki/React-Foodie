import React, { Component } from 'react';
//import { Link } from 'react-router-dom';

export class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-dark bg-dark mb-5">
				<span className="navbar-brand mb-0 h1 mx-auto">React Foodie</span>
				{/* <div>
					<header className="App-header">
						<h1 className="App-title float-left">Foodie</h1>
						<div className="float-right">
							<button className="recipe__button">
								<Link to={{ pathname: `/` }}>Search Recipes</Link>
							</button>
							<button className="recipe__button">
								<Link to={{ pathname: `/products` }}>Search Products</Link>
							</button>
						</div>
					</header>
				</div> */}
			</nav>
		);
	}
}

export default Navbar;

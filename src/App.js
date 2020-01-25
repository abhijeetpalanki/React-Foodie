import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/main/Navbar';

import Recipes from './components/recipes/Recipes';
import Instructions from './components/recipes/instructions/Instructions';
import Nutrition from './components/recipes/nutrition/Nutrition';

import Products from './components/products/Products';
import Product from './components/products/Product';
import Information from './components/products/information/Information';

class App extends React.Component {
	render() {
		return (
			<Router>
				<React.Fragment>
					<Navbar />
					<div className="container container-fluid">
						<Switch>
							<Route path="/" component={Recipes} exact />
							<Route path="/products" component={Products} />
							<Route path="/product/:id" component={Product} />
							<Route path="/product/information/:id" component={Information} />
							<Route path="/recipe/instructions/:id" component={Instructions} />
							<Route path="/recipe/nutrition/:id" component={Nutrition} />
						</Switch>
					</div>
				</React.Fragment>
			</Router>
		);
	}
}

export default App;

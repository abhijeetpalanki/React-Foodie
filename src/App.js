import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from './context';
import Index from './components/main/Index';
import Navbar from './components/main/Navbar';
import Products from './components/main/Products';
import Product from './components/nested/Product';
import Instructions from './components/recipes/instructions/Instructions';
import Nutrition from './components/recipes/nutrition/Nutrition';

class App extends React.Component {
	render() {
		return (
			<Provider>
				<Router>
					<React.Fragment>
						<Navbar />
						<div className="container">
							<Switch>
								<Route exact path="/" component={Index} />
								<Route path="/recipe/instructions/:id" component={Instructions} />
								<Route path="/recipe/nutrition/:id" component={Nutrition} />
								<Route path="/products" component={Products} />
								<Route path="/product/:id" component={Product} />
							</Switch>
						</div>
					</React.Fragment>
				</Router>
			</Provider>
		);
	}
}

export default App;

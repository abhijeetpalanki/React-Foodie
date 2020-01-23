import React, { Component } from 'react';
import { Consumer } from '../../context';
import Spinner from '../main/Spinner';
import Recipe from './Recipe';

class Recipes extends Component {
	render() {
		return (
			<Consumer>
				{(value) => {
					const { recipes, heading } = value;

					if (recipes === undefined || recipes.length === 0) {
						return <Spinner />;
					} else {
						return (
							<React.Fragment>
								<h3 className="text-center mb-4">{heading}</h3>
								<div className="row">
									{recipes.map((item) => <Recipe key={item.id} recipe={item} />)}
								</div>
							</React.Fragment>
						);
					}
				}}
			</Consumer>
		);
	}
}

export default Recipes;

import React, { Component } from 'react';
import Axios from 'axios';
import { FaUtensils } from 'react-icons/fa';
import Recipe from './Recipe';
// import Spinner from '../main/Spinner';

class Recipes extends Component {
	state = {
		recipeTitle: '',
		heading: '',
		recipes: []
	};

	findRecipe = async (e) => {
		e.preventDefault(); // To stop reloading after every click event

		// Get all recipes by search term
		Axios.get(
			`https://api.spoonacular.com/recipes/search?query=${this.state.recipeTitle}&apiKey=${process.env
				.REACT_APP_API_KEY}&number=12`
		)
			.then((res) => {
				this.setState({
					recipeTitle: '',
					heading: 'Search Results',
					recipes: res.data.results
				});
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		const { recipes, heading, recipeTitle } = this.state;

		// if (recipes === undefined || recipes.length === 0) {
		// 	return <Spinner />;
		// } else {
		return (
			<React.Fragment>
				<div className="card card-body mb-4 p-4">
					<h1 className="display-4 text-center">
						<FaUtensils /> Search For A Recipe
					</h1>
					<p className="lead text-center">Get the nutrition & instructions for any recipe</p>
					<form onSubmit={this.findRecipe}>
						<div className="form-group">
							<input
								type="text"
								className="form-control form-control-lg"
								placeholder="Recipe Title..."
								name="recipeTitle"
								value={recipeTitle}
								onChange={this.onChange}
							/>
						</div>
						<button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
							Get Recipes
						</button>
					</form>
				</div>

				<h3 className="text-center mb-4">{heading}</h3>
				<div className="row">{recipes.map((item) => <Recipe key={item.id} recipe={item} />)}</div>
			</React.Fragment>
		);
		// }
	}
}

export default Recipes;

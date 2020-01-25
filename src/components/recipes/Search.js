import React, { Component } from 'react';
import { FaUtensils } from 'react-icons/fa';
import { RecipesConsumer } from '../../contexts/RecipesContext';
import Axios from 'axios';

class Search extends Component {
	state = {
		recipeTitle: ''
	};

	findRecipe = async (dispatch, e) => {
		e.preventDefault();

		Axios.get(
			`https://api.spoonacular.com/recipes/search?query=${this.state.recipeTitle}&apiKey=${process.env
				.REACT_APP_API_KEY}&number=12`
		)
			.then((res) => {
				dispatch({
					type: 'SEARCH_RECIPES',
					payload: res.data.results
				});

				this.setState({ recipeTitle: '' });
			})
			.catch((err) => console.log(err));
	};

	onChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		return (
			<RecipesConsumer>
				{(value) => {
					const { dispatch } = value;
					return (
						<div className="card card-body mb-4 p-4">
							<h1 className="display-4 text-center">
								<FaUtensils /> Search For A Recipe
							</h1>
							<p className="lead text-center">Get the nutrition & instructions for any recipe</p>
							<form onSubmit={this.findRecipe.bind(this, dispatch)}>
								<div className="form-group">
									<input
										type="text"
										className="form-control form-control-lg"
										placeholder="Recipe Title..."
										name="recipeTitle"
										value={this.state.recipeTitle}
										onChange={this.onChange}
									/>
								</div>
								<button className="btn btn-primary btn-lg btn-block mb-5" type="submit">
									Get Recipes
								</button>
							</form>
						</div>
					);
				}}
			</RecipesConsumer>
		);
	}
}

export default Search;

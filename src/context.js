import React, { Component } from 'react';
import Axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
	switch (action.type) {
		case 'SEARCH_RECIPES':
			return {
				...state,
				recipes: action.payload,
				heading: 'Search Results'
			};
		default:
			return state;
	}
};

export class Provider extends Component {
	state = {
		heading: 'Random Recipes',
		recipes: [],
		dispatch: (action) => this.setState((state) => reducer(state, action))
	};

	componentDidMount = async () => {
		// Get all recipes by search term

		Axios.get(`https://api.spoonacular.com/recipes/search?apiKey=${process.env.REACT_APP_API_KEY}&number=12`)
			.then((res) => {
				this.setState({
					recipes: res.data.results
				});
			})
			.catch((err) => console.log(err));
	};

	render() {
		return <Context.Provider value={this.state}>{this.props.children}</Context.Provider>;
	}
}

export const Consumer = Context.Consumer;

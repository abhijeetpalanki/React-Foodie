import React from 'react';
import './App.css';
import Form from './components/Form';
import Recipes from './components/Recipes';
import Header from './components/Header';

const API_KEY = "486fbf093e3f4211b0fc1a92ee1783f2";

class App extends React.Component {

  state = {
    recipes: []
  }

  getRecipe = async (e) => {
    e.preventDefault();

    const recipeName = e.target.elements.recipeName.value;
    
    const api_call = await fetch(`https://api.spoonacular.com/recipes/search?query=${recipeName}&apiKey=${API_KEY}&number=12`);
    const data = await api_call.json();
    
    this.setState({ recipes: data.results });
  }

  // componentDidUpdate = () => {
  //   const recipes = JSON.stringify(this.state.recipes);
  //   localStorage.setItem("recipes", recipes);
  // }

  // componentDidMount = () => {
  //   const json = localStorage.getItem("recipes");
  //   const retrievedRecipes = JSON.parse(json);
  //   this.setState({recipes: retrievedRecipes});
  // }

  render() {
    return (
      <div className="App">
        <Header />
        <Form getRecipe={this.getRecipe} />
        <Recipes recipes={this.state.recipes} />
      </div>
    );
  }
}

export default App;

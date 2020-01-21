import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const API_KEY = "486fbf093e3f4211b0fc1a92ee1783f2";

class Recipe extends React.Component {
    state = {
        recipeId: "",
        steps: []
    }

    componentDidMount = async () => {
        this.state.recipeId = this.props.location.state.recipeId;
        
        const req = await fetch(`https://api.spoonacular.com/recipes/${this.state.recipeId}/analyzedInstructions?apiKey=${API_KEY}`);
        const res = await req.json();
        
        this.setState({steps: res[0].steps});
    }
    

    render() {
        const steps = this.state.steps;
        // const image_url = `https://spoonacular.com/recipeImages/${recipe.image}`;

        return (
            <React.Fragment>
                <Header />
                <div className="container mb-3">
                    <div style={{textAlign: "center"}}>
                        <button className="recipe__button">
                            <Link to={{ 
                                pathname: `/nutrition/${this.state.recipeId}`, 
                                state: { nutritionId: this.state.recipeId } }}>View Nutrition</Link>
                        </button>
                        <button className="recipe__button">
                            <Link to="/">Go Home</Link>
                        </button>
                    </div>

                    <hr />

                    { this.state.steps.length !== 0 &&
                        steps.map(step => {
                            return (
                                <div key={step.number} className="active-recipe">
                                    <h3 className="active-recipe__title">{ step.number }</h3>
                                    <h4 className="active-recipe__publisher">METHOD: <span>{ step.step }</span></h4>
                                    <h4 className="recipes__subtitle">
                                       {step.ingredients.length > 0 ? "INGREDIENTS:" : "" }  
                                        <ul>
                                            {
                                                step.ingredients.map(ingredient => {
                                                    return (
                                                        <li className="recipes__subtitle" key={ingredient.id}>
                                                            {ingredient.name}
                                                        </li>
                                                    );
                                                })
                                            }
                                        </ul>
                                    </h4>
                                </div>
                            );
                        })                  
                    }
                </div>
            </React.Fragment>
        );
    }
}

export default Recipe;
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Header from './Header';
import BadNutritionList from './BadNutritionList';
import GoodNutritionList from './GoodNutritionList';

const API_KEY = "486fbf093e3f4211b0fc1a92ee1783f2";

export class Nutrition extends Component {
    state = {
        nutritionId: "",
        bad: [],
        good: []
    }

    componentDidMount = async () => {
        this.state.nutritionId = this.props.location.state.nutritionId;
        
        const req = await fetch(`https://api.spoonacular.com/recipes/${this.state.nutritionId}/nutritionWidget.json?apiKey=${API_KEY}`);
        const res = await req.json();
        
        this.setState({
            bad: res.bad,
            good: res.good
        });
    }

    render() {
        const { bad, good } = this.state;

        return (
            <React.Fragment>
                <Header />
                <div style={{textAlign: "center"}}>
                    <button className="recipe__button">
                        <Link to={{ 
                            pathname: `/recipe/${this.state.nutritionId}`, 
                            state: { recipeId: this.state.nutritionId } }}>View Recipe</Link>
                    </button>
                    <button className="recipe__button">
                        <Link to="/">Go Home</Link>
                    </button>
                </div>

                <hr />

                <div className="container mb-3">
                    <h4 className="recipes__title">Bad Nutrition</h4>
                    <BadNutritionList badNutritionList={bad} />

                    <hr />
                    <h4 className="recipes__title">Good Nutrition</h4>
                    <GoodNutritionList goodNutritionList={good} />
                </div>
            </React.Fragment>
        )
    }
}

export default Nutrition

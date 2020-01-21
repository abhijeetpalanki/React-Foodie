import React from 'react'
import {Link} from "react-router-dom"

const Recipes = props => (
    <div className="container">
        <div className="row">
            { 
            props.recipes.map((recipe) => {
                const image_url = `https://spoonacular.com/recipeImages/${recipe.image}`;
                return (
                    <div key={recipe.id} className="col-md-4" style={{ marginBottom: "2rem" }}>
                        <div className="recipes__box">
                            <img className="recipe__box-img" src={image_url} alt={recipe.title} />
                            <div className="recipe__text">
                                <p className="recipes__title">
                                    { recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                </p>
                                <p className="recipes__subtitle">READY IN: <span>
                                    { recipe.readyInMinutes }    
                                </span></p>
                                <p className="recipes__subtitle">SERVINGS: <span>
                                    { recipe.servings }    
                                </span></p>
                            </div>
                            <div>
                                <button className="recipe__button">
                                    <Link to={{ 
                                        pathname: `/recipe/${recipe.id}`, 
                                        state: { recipeId: recipe.id } }}>View Recipe</Link>
                                </button>
                                <button className="recipe__button">
                                    <Link to={{ 
                                        pathname: `/nutrition/${recipe.id}`, 
                                        state: { nutritionId: recipe.id } }}>View Nutrition</Link>
                                </button>
                            </div>    
                        </div>
                    </div>
                );
            })
            }
        </div>
    </div>
);

export default Recipes

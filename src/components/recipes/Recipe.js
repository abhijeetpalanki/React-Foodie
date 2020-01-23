import React from 'react';
import { Link } from 'react-router-dom';

const Recipe = (props) => {
	const { recipe } = props;
	const image_url = `https://spoonacular.com/recipeImages/${recipe.image}`;
	return (
		<div className="col-md-4">
			<div className="card mb-4 shadow-sm">
				<img className="card-img-top" src={image_url} alt={recipe.title} />
				<div className="card-body">
					<h5 className="card-title">
						{recipe.title.length < 20 ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...`}
					</h5>
					<p className="card-text">
						READY IN: <span>{recipe.readyInMinutes} mins.</span>
					</p>
					<p className="card-text">
						SERVINGS: <span>{recipe.servings}</span>
					</p>
					<Link className="btn btn-outline-danger mr-2" to={`/recipe/instructions/${recipe.id}`}>
						View Instructions
					</Link>
					<Link className="btn btn-outline-danger" to={`/recipe/nutrition/${recipe.id}`}>
						View Nutrition
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Recipe;

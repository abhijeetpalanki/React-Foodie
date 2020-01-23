import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BadNutritionList from './BadNutritionList';
import GoodNutritionList from './GoodNutritionList';
import Spinner from '../../main/Spinner';
import Axios from 'axios';

export class Nutrition extends Component {
	state = {
		bad: [],
		good: []
	};

	componentDidMount = async () => {
		Axios.get(
			`https://api.spoonacular.com/recipes/${this.props.match.params.id}/nutritionWidget.json?apiKey=${process.env
				.REACT_APP_API_KEY}`
		).then((res) => {
			this.setState({
				bad: res.data.bad,
				good: res.data.good
			});
		});
	};

	render() {
		const { bad, good } = this.state;

		if (
			bad === undefined ||
			good === undefined ||
			Object.keys(bad).length === 0 ||
			Object.keys(good).length === 0
		) {
			return <Spinner />;
		} else {
			return (
				<React.Fragment>
					<div className="row">
						<div className="col-md-6 float-left">
							<h3>Nutrition By Category</h3>
						</div>
						<div className="col-md-6">
							<Link to="/" className="btn btn-dark btn-sm mb-4 float-right">
								Go Back
							</Link>
						</div>
					</div>

					<div className="row">
						<div className="col-md-6">
							<div className="card border-success mb-4 shadow-sm">
								<div className="card-header border-success">
									<h4 className="text-success">Good Nutrition</h4>
								</div>
								{good.map((g) => <GoodNutritionList key={g.title} good={g} />)}
							</div>
						</div>
						<div className="col-md-6">
							<div className="card border-danger mb-4 shadow-sm">
								<div className="card-header border-danger">
									<h4 className="text-danger">Bad Nutrition</h4>
								</div>
								{bad.map((b) => <BadNutritionList key={b.title} bad={b} />)}
							</div>
						</div>
					</div>
				</React.Fragment>
			);
		}
	}
}

export default Nutrition;

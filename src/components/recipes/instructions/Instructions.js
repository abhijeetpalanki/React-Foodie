import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../main/Spinner';
import Instruction from './Instruction';
import Axios from 'axios';

export class Instructions extends Component {
	state = {
		instructions: {}
	};

	componentDidMount = async () => {
		// Get recipe by id to get analyzed instructions
		Axios.get(
			`https://api.spoonacular.com/recipes/${this.props.match.params.id}/analyzedInstructions?apiKey=${process.env
				.REACT_APP_API_KEY}`
		).then((res) => {
			this.setState({
				instructions: res.data[0].steps
			});
		});
	};

	render() {
		const { instructions } = this.state;

		if (instructions === undefined || Object.keys(instructions).length === 0) {
			return <Spinner />;
		} else {
			return (
				<React.Fragment>
					<div className="row">
						<div className="col-md-6 float-left">
							<h3>Recipe Instructions</h3>
						</div>
						<div className="col-md-6">
							<Link to="/" className="btn btn-dark btn-sm mb-4 float-right">
								Go Back
							</Link>
						</div>
					</div>
					{instructions.map((step) => <Instruction key={step.number} instruction={step} />)}
				</React.Fragment>
			);
		}
	}
}

export default Instructions;

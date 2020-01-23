import React from 'react';

const Instruction = (props) => {
	const { instruction } = props;
	return (
		<div className="card mb-4 shadow-sm">
			<div className="card-header">
				STEP <span className="text-success">{instruction.number}</span>:
			</div>
			<div className="card-body">
				<h5 className="card-title">
					METHOD: <span className="text-primary">{instruction.step}</span>
				</h5>
				<h6 className="card-text">
					{instruction.ingredients.length > 0 ? 'INGREDIENTS:' : ''}
					<ul className="list-group mt-3">
						{instruction.ingredients.map((ingredient) => {
							return (
								<li className="list-group-item text-success" key={ingredient.id}>
									{ingredient.name}
								</li>
							);
						})}
					</ul>
				</h6>
			</div>
		</div>
	);
};

export default Instruction;

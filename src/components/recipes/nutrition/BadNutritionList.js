import React from 'react';

const BadNutritionList = (props) => {
	const { bad } = props;
	return (
		<ul className="list-group">
			<li className="list-group-item">
				<span>
					{bad.title} - {bad.amount},{' '}
				</span>
				Daily Needs: {bad.percentOfDailyNeeds}%
			</li>
		</ul>
	);
};

export default BadNutritionList;

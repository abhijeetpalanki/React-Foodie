import React from 'react';

const GoodNutritionList = (props) => {
	const { good } = props;
	return (
		<ul className="list-group">
			<li className="list-group-item">
				<span>
					{good.title} - {good.amount},{' '}
				</span>
				Daily Needs: {good.percentOfDailyNeeds}%
			</li>
		</ul>
	);
};

export default GoodNutritionList;

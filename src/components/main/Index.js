import React from 'react';
import Recipes from '../recipes/Recipes';
import Search from '../recipes/Search';

const Index = () => {
	return (
		<React.Fragment>
			<Search />
			<Recipes />
		</React.Fragment>
	);
};

export default Index;

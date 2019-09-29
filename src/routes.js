import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './components/category';


const Routes = () => {
	return (
		<Router>
			<Switch>
				<Route path="/product-category" component={Category} />
			</Switch>
		</Router>
	)
}

export default Routes;

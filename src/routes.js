import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Category from './components/category';
import ProductPage from './components/products';
import ProductDetails from './components/productDetails';
import Footer from './components/footer';
import Header from './components/header';

import Homepage from './components/homepage';


const Routes = () => {
	return (
		<Fragment>
			<Header />

			<Router>
				<Switch>
				<Route path="/" exact component={Homepage} />
					<Route path="/product-category" exact component={Category} />
					<Route path="/product/:categoryId" component={ProductPage} />
					<Route path="/product-details/:productId" component={ProductDetails} />

				</Switch>
			</Router>
			<Footer />
		</Fragment>

	)
}

export default Routes;

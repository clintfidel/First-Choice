import React, { Fragment, Component } from 'react';
import Header from '../header';
import { connect } from 'react-redux';
import './styles.css';
import ProductView from './ProductView';
class ProductPage extends Component {

	displayProducts = () => {
		const { products, match } = this.props;
		let foundProducts = [];

		products.forEach(product => {
			const matchingProducts = product.products.filter(prdt => prdt.categoryId === match.params.categoryId);
			foundProducts = foundProducts.concat(matchingProducts);
		});


		return foundProducts.map((prdt, index) => (
			<ProductView
				item={prdt}
				key={prdt.id}
				index={index} 
				/>
		));
	}

	render() {
		return (
			<Fragment>
				<Header />
				<div className="row"> 
					{this.displayProducts()}
				</div>
			</Fragment>
		)
	}

}

const mapStateToProps = state => ({
	products: state.productsList.products,
});

export default connect(mapStateToProps)(ProductPage);
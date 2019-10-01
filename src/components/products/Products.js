import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import './styles.css';
class ProductPage extends Component {

	displayProducts = () => {
		const { products, match } = this.props;
		let foundProducts = [];

		products.forEach(product => {
			const matchingProducts = product.products.filter(prdt => prdt.categoryId === match.params.categoryId);
			foundProducts = foundProducts.concat(matchingProducts);
		});


		return foundProducts.map((prdt, index) => {
			return (
				<div
					key={prdt.id}
					className="thumbnail"
				>
					<img src={prdt.images[0]} alt="" />
					<div
						onClick={() => this.props.history.push(`/product-details/${prdt.id}`)}
						 className="caption">
						<h3>{prdt.name}</h3>
						<h4>{prdt.price}</h4>
						<h5>{prdt.description}</h5>
					</div>
				</div>


			)
		})
	}

	render() {
		return (
			<div className="container">
				<div className="row" style={{ display: "flex" }}>
					<div className="col-xs-18 col-sm-6 col-md-3">
						{this.displayProducts()}
					</div>
				</div>
			</div>
		// 	<div className="container">
		// 	{this.state.productList.map((prdt, index) => (
		// 		<div className="row" style={{ display: "flex" }}>
		// 			<div className="col-xs-18 col-sm-6 col-md-3">
		// 				<div
		// 					className="thumbnail"
		// 				>
		// 					<img src={prdt.images[0]} alt="" />
		// 					<div
		// 						onClick={() => this.props.history.push(`/product-details/${prdt.id}`)}
		// 						key={prdt.id} className="caption">
		// 						<h3>{prdt.name}</h3>
		// 						<h4>{prdt.price}</h4>
		// 						<h5>{prdt.description}</h5>
		// 					</div>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	))
		// 	}
		// </div>
		)
	}

}

const mapStateToProps = state => ({
	products: state.productsList.products,
});

export default connect(mapStateToProps)(ProductPage);
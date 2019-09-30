import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import Header from '../header';
import ProductInfo from './ProductInfo';
import './style.css';

class ProductDetails extends Component {

	displayProductDetails = () => {
		console.log('i got called')
		const { products, match } = this.props;
		let foundProducts = [];

		products.forEach(product => {
			console.log(products, 'all=')
			const matchingProducts = product.products.filter(prdt => {
				return prdt.id === parseInt(match.params.productId, 10)
			});
			console.log(matchingProducts, 'matchingProducts')
			foundProducts = foundProducts.concat(matchingProducts);
		});
		 return foundProducts.map((prdt, index) => {
			 return (
				 <ProductInfo
				 	key={index} 
					item={prdt}
					index={index}/>
			 )
		});
	}

	render() {
		return (
			<Fragment>

				<Header />
				<div className="container">
					<div className="card">
						<div className="container-fliud">
							<div className="wrapper row">
								<div className="preview col-md-6">
									<div className="preview-pic tab-content">
										<div className="tab-pane active" id="pic-1"><img src="http://www.charlesclinkard.co.uk/blog/wp-content/uploads/2016/02/Peter-kaiser-occasion-shoes-and-matching-bags.jpg" alt="" /></div>
										<div className="tab-pane" id="pic-2"><img src="https://images-na.ssl-images-amazon.com/images/I/71KHQyQLy6L._UY395_.jpg" alt="" /></div>
										<div className="tab-pane" id="pic-3"><img src="https://cdn.shopify.com/s/files/1/0935/7708/products/Gucci_322483_Oiled_Suede_Oxfords_Red_11-4-16__281_29.jpg?v=1479771687" alt="" /></div>
										<div className="tab-pane" id="pic-4"><img src="https://rukminim1.flixcart.com/image/832/832/jd0jtzk0/shoe/a/h/y/true10-blue-7-walkjump-blue-original-imaf2yzfgfz5qamg.jpeg?q=70" alt="" /></div>
										<div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" alt="" /></div>
									</div>
									<ul className="preview-thumbnail nav nav-tabs">
										<li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://www.charlesclinkard.co.uk/blog/wp-content/uploads/2016/02/Peter-kaiser-occasion-shoes-and-matching-bags.jpg" alt="" /></a></li>
										<li><a data-target="#pic-2" data-toggle="tab"><img src="https://images-na.ssl-images-amazon.com/images/I/71KHQyQLy6L._UY395_.jpg" alt="" /></a></li>
										<li><a data-target="#pic-3" data-toggle="tab"><img src="https://cdn.shopify.com/s/files/1/0935/7708/products/Gucci_322483_Oiled_Suede_Oxfords_Red_11-4-16__281_29.jpg?v=1479771687" alt="" /></a></li>
										<li><a data-target="#pic-4" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/832/832/jd0jtzk0/shoe/a/h/y/true10-blue-7-walkjump-blue-original-imaf2yzfgfz5qamg.jpeg?q=70" alt="" /></a></li>
										<li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" alt="" /></a></li>
									</ul>

								</div>
								<div className="details col-md-6">
									{this.displayProductDetails()}
									
									<div className="action">
										<h2>Share:</h2>
										<span className="instagram">
											<span className="fa fa-instagram"></span>
										</span>
										<i className="fa fa-whatsapp icons"></i>
										<i className="fa fa-facebook icons"></i>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</Fragment>

		)
	}

}

const mapStateToProps = state => ({
	products: state.productsList.products,
});

export default connect(mapStateToProps)(ProductDetails);

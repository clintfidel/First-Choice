import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
// import Header from '../header';
import ProductInfo from "./ProductInfo";
import "./style.css";

class ProductDetails extends Component {
  state = {
    currentImage: "https://rukminim1.flixcart.com/image/832/832/jd0jtzk0/shoe/a/h/y/true10-blue-7-walkjump-blue-original-imaf2yzfgfz5qamg.jpeg?q=70"
  };

  displayProductDetails = () => {
    const { products, match } = this.props;
    let foundProducts = [];

    products.forEach(product => {
      const matchingProducts = product.products.filter(prdt => {
        return prdt.id === parseInt(match.params.productId, 10);
      });
      foundProducts = foundProducts.concat(matchingProducts);
    });
    return foundProducts.map((prdt, index) => {
      return <ProductInfo key={index} item={prdt} index={index} />;
    });
  };

  handleClickImage = imageUrl => {
    this.setState({
      currentImage: imageUrl
    });
  };

  smallImage = () => {
    let foundProduct = [];
    return this.props.products.map(product => {
      const productMatch = product.products.filter(product => {
       return product.id === this.props.match.params.productId
      })
        foundProduct = productMatch;
        return foundProduct.map((image, index) => {
          console.log(image, '======>>>>>')
          return (
            <li
              key={index} 
              onClick={() => this.handleClickImage(image)} className="">
              <img src={image} alt="" />
            </li>
          );
        });
    });
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview-pic tab-content">
                    <div className="tab-pane">
                      <img src={this.state.currentImage} alt="" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    {this.smallImage()}
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
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsList.products
});

export default connect(mapStateToProps)(ProductDetails);

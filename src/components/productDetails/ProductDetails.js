import React, { Fragment, Component } from "react";
import { connect } from "react-redux";
import { getAllproductsAndCategory } from '../../actions/action'
import ProductInfo from "./ProductInfo";
import "./style.css";

class ProductDetails extends Component {
  state = {
    currentImage: ""
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

  getProduct(products, productId) {
    console.log(products, productId)
    for (let i = 0; i < products.length; i++) {
      for (let j = 0; j < products[i].products.length; j++) {
        if (products[i].products[j].id === productId) {
          return products[i].products[j];
        }
      }
    }
  }

  async componentDidMount() {
    await this.props.getAllproductsAndCategory();
    if(this.props.products.length){
      let foundProduct = this.getProduct(this.props.products, parseInt(this.props.match.params.productId, 10));
      this.setState({
        currentImage: foundProduct.images[0]
      });
    }
  }

  smallImage = () => {
    let foundProduct;
    if(this.props.products.length){
       foundProduct = this.getProduct(this.props.products, parseInt(this.props.match.params.productId, 10)); 

    return foundProduct.images.map((image, index) => {
      return (
        <li
          key={index}
          onClick={() => this.handleClickImage(image)}
          className="tab-pane"
        >
          <img className="small-image" src={image} alt="" />
        </li>
      );
    });
  }
};

  render() {
    let small = this.smallImage();
    return (
      <Fragment>
        <div className="container">
          <div className="card">
            <div className="container-fliud">
              <div className="wrapper row">
                <div className="preview col-md-6">
                  <div className="preview">
                    <div className="tab-pane">
                      <img src={this.state.currentImage} alt="" />
                    </div>
                  </div>
                  <ul className="preview-thumbnail nav nav-tabs">
                    {small}
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

export default connect(mapStateToProps, {getAllproductsAndCategory})(ProductDetails);

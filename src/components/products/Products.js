import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllproductsAndCategory } from "../../actions/action";
import "./styles.css";
class ProductPage extends Component {
  componentDidMount = () => {
    this.props.getAllproductsAndCategory();
  };
  displayProducts = () => {
    const { products, match } = this.props;
    let foundProducts = [];

    products.forEach(product => {
      const matchingProducts = product.products.filter(
        prdt => prdt.categoryId === match.params.categoryId
      );
      foundProducts = foundProducts.concat(matchingProducts);
    });

    return foundProducts.map((prdt, index) => {
      return (
        <div
          onClick={() =>
            this.props.history.push(`/product-details/${prdt.id}/`)
          }
          key={prdt.id}
          className="thumbnail col-xs-6 col-sm-4"
        >
          <img
            className="img-fluid img-responsive"
            src={prdt.images[0]}
            alt=""
          />
          <div className="caption">
            <h3>{prdt.name}</h3>
            <h4>{prdt.price}</h4>
            <h5>{prdt.description}</h5>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="">{this.displayProducts()}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsList.products
});

export default connect(
  mapStateToProps,
  { getAllproductsAndCategory }
)(ProductPage);

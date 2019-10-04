import React, { Component } from "react";
import "./style.css";
import RLDD from "react-list-drag-and-drop/lib/RLDD";

import {
  getAllproductsAndCategory,
  setCategoryIndex
} from "../../actions/action";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    this.props.getAllproductsAndCategory();
  }

  handleRLDDChange = newItems => {
    this.props.setCategoryIndex(newItems);
  };

  render() {
    return (
      <RLDD
        items={this.props.products}
        itemRenderer={item => {
          return (
            <div className="notice notice-lg">
              <Link to={`/product/${item.id}`}>{item.name}</Link>
            </div>
          );
        }}
        onChange={this.handleRLDDChange}
      />
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsList.products
});

export default connect(
  mapStateToProps,
  { getAllproductsAndCategory, setCategoryIndex }
)(Category);

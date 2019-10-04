import React, { Component } from "react";
import "./style.css";
import RLDD from "react-list-drag-and-drop/lib/RLDD";

import { getAllproductsAndCategory } from '../../actions/action'
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products || [],
      draggedCategories: []
    };  
  }

   componentDidMount() {
     this.props.getAllproductsAndCategory();
  }
  
  handleRLDDChange = newItems => {
    this.setState({ products: newItems });
  };
  //  SortableItem = SortableElement(({value}) => <div className="notice notice-lg draggable">
  //   <Link to={`/product/${value.id}`}>{value.name}</Link></div>);

  // SortableList = SortableContainer(({items}) => {
  //   return (
  //     <div>
  //       {items.map((value, index) => (
  //         <SortableItem key={`item-${value.id}`} index={index} value={value} />
  //       ))}
  //     </div>
  //   );
  // });

  // onSortEnd = ({oldIndex, newIndex}) => {
  //   this.setState(({products}) => ({
  //     products: arrayMove(products, oldIndex, newIndex),
  //   }));
  // };

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

export default connect(mapStateToProps, {getAllproductsAndCategory})(Category);

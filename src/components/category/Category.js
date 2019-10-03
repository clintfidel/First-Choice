import React, { Fragment, Component } from "react";
import "./style.css";
// import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import RLDD from "react-list-drag-and-drop/lib/RLDD";

// import Header from '../header';
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Category extends Component {
  state = {
    products: this.props.products || [],
    draggedCategories: []
  };

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
        items={this.state.products}
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

export default connect(mapStateToProps)(Category);

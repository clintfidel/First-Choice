import React, { Fragment, Component } from 'react';
import './style.css';
// import Header from '../header';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

class Category extends Component {
	state = {
			productsCategories: [
				{name: '', id: '1'},
				],
				draggedCategories: []
	}


	 onDrag = (event, category) => {
		event.preventDefault();
  this.setState({
    draggedCategories: category
  });
}

	onDragOver = (event) => {
		event.preventDefault();
}

	onDrop = (event, pos) => {
	 const { productsCategories, draggedCategories } = this.state;

	 let categories = productsCategories.filter((category) => {
			 if (category.id === draggedCategories.id) {
				 return draggedCategories;
			 }
	 });

	this.setState({ productsCategories: [...productsCategories, categories]})
	}

	dragAndDropCategories = () => {
		const { products } = this.props;
		 return products.length > 0 && products.map((category, index) => {
				return (
					<div
						key={category.id} 
						onDrag = {(event) => this.onDrag(event, category)}
						onDrop = {(event) => this.onDrop(event, index)}

						draggable
						className="notice notice-lg draggable"
					>
						<Link to={`/product/${category.id}`}>
							{category.name}
            </Link>
					
    		</div>
				)
		 })
	 }

	 render() {
		return (
			<Fragment>
				{/* <Header /> */}
				<div
					onDragOver={(event)=>this.onDragOver(event)}
					onDrop={(event)=>{this.onDrop(event)}}
					className="container">
					
					{this.dragAndDropCategories()}
				
				</div>
			</Fragment>
		)
	 }
	
}

const mapStateToProps = state => ({
  products: state.productsList.products,
});

export default connect(mapStateToProps)(Category);
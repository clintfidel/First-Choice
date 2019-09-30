import React from 'react';
import './style.css';

const ProductInfo = ({ item }) => {
	return (
		<div key={item.id}>
			<p className="product-title">{item.name}</p>
			<p className="product-details">
				{item.description}
			</p>
			<h3 className="product-price">Price: {item.price}</h3>
		</div>
	)
}

export default ProductInfo;

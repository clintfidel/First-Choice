import React from 'react';
import './styles.css';

const Productview = ({ item, index }) => {
	return (
		<div className="container">
			<div className="row" style={{display: "flex"}}>
				<div className="col-xs-18 col-sm-6 col-md-3">
					<div
						className="thumbnail"
					>
						<img src={item.images[0]} alt="" />
						<div
							onClick={() => this.props.history.push(`/product-details/${item.id}`)}  
							key={index} className="caption">
							<h3>{item.name}</h3>
							<h4>{item.price}</h4>
							<h5>{item.description}</h5>
						</div>
					</div>
				</div>
				</div>
			</div>
	)
}

export default Productview;
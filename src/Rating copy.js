import React, { Component } from "react";
import Pip from "./Pip";

class Product extends Component {
	constructor(props) {
		super(props);
		this.finalRating = this.finalRating.bind(this);
	}

	finalRating() {
		let ratingArray = [];
		const { rating, productID } = this.props;

		for (let x = 0; x < 5; x += 1) {
			ratingArray.push(
				<Pip
					// NOTE
					// trying to attach a hover handler here
					active={`${x + 1 <= rating ? "true" : ""}`}
					rating={`${x + 1}`}
					productID={productID}
				/>
			);
		}
		return ratingArray;
	}

	render() {
		return (
			<div className="rating">
				<h5 className="rating-title">Rating: </h5>
				{this.finalRating()}
			</div>
		);
	}
}

export default Product;

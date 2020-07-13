import React from "react";
import Pip from "./Pip";

function Product({ rating, maxRating = 5, productID }) {
	const generateRating = () => {
		let finalRating = [];
		for (let x = 0; x < maxRating; x += 1) {
			finalRating.push(
				<Pip
					active={`${x + 1 <= rating ? "true" : ""}`}
					rating={`${x + 1}`}
					productID={productID}
				/>
			);
		}
		return finalRating;
	};

	return (
		<div className="rating">
			<h5 class="rating-title">Rating: </h5>
			{generateRating()}
		</div>
	);
}

export default Product;

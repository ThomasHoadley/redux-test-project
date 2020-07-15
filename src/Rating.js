import React, { useState } from "react";
import Pip from "./Pip";

function Product({ rating, maxRating = 5, productID }) {
	const [currentRating, setcurrentRating] = useState(rating);

	const handleHoverIn = (e) => {
		let hoveredRating = e.target.getAttribute("rating");

		if (hoveredRating !== null) {
			setcurrentRating(hoveredRating);
		}
	};

	const handleHoverOut = () => {
		setcurrentRating(rating);
	};

	const generateRating = () => {
		let finalRating = [];
		for (let x = 0; x < maxRating; x += 1) {
			finalRating.push(
				<Pip
					active={`${x + 1 <= currentRating ? "true" : ""}`}
					rating={`${x + 1}`}
					productID={productID}
				/>
			);
		}
		return finalRating;
	};

	return (
		<div
			className="rating"
			onMouseOver={handleHoverIn}
			onMouseOut={handleHoverOut}
		>
			<h5 class="rating-title">Rating: </h5>
			{generateRating()}
		</div>
	);
}

export default Product;

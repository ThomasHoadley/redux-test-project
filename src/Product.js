import React from "react";
import Rating from "./Rating";

function Product({ product, productHovered }) {
	const { bool, hoveredProductID, hoveredRating } = productHovered;

	return (
		<div className="product">
			<h2>{product.title}</h2>
			<p>{product.description}</p>

			{bool && hoveredProductID == product.id ? (
				<Rating
					rating={hoveredRating}
					productID={product.id}
					key={product.id}
				/>
			) : (
				<Rating
					rating={product.rating}
					productID={product.id}
					key={product.id}
				/>
			)}
		</div>
	);
}

export default Product;

import React from "react";
import Rating from "./Rating";

function Product({ product }) {
	return (
		<div className="product">
			<h2>{product.title}</h2>
			<p>{product.description}</p>

			<Rating rating={product.rating} productID={product.id} key={product.id} />
		</div>
	);
}

export default Product;

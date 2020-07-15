import React from "react";
import { useDispatch } from "react-redux";
import { UPDATE_PRODUCT, PRODUCT_HOVERED } from "./store/products/actions";

function Pip({ active, rating, productID }) {
	const dispatch = useDispatch();

	function handleClick(e) {
		let clickedRating = e.target.getAttribute("rating");

		dispatch({
			type: UPDATE_PRODUCT,
			payload: {
				productID,
				clickedRating,
			},
		});
	}

	return (
		<div
			onClick={handleClick}
			className={`rating-pip ${active ? "active" : ""}`}
			rating={rating}
		></div>
	);
}

export default Pip;

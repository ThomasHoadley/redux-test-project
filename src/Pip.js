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

	function handleHoverIn(e) {
		let rating = e.target.getAttribute("rating");
		dispatch({
			type: PRODUCT_HOVERED,
			payload: {
				bool: true,
				hoveredProductID: productID,
				hoveredRating: rating,
			},
		});
	}

	function handleHoverOut() {
		dispatch({
			type: PRODUCT_HOVERED,
			payload: {
				bool: false,
				hoveredProductID: 0,
				hoveredRating: 0,
			},
		});
	}

	return (
		<div
			onClick={handleClick}
			onMouseEnter={handleHoverIn}
			onMouseLeave={handleHoverOut}
			className={`rating-pip ${active ? "active" : ""}`}
			rating={rating}
		></div>
	);
}

export default Pip;

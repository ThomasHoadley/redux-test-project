import { LOAD_PRODUCTS, UPDATE_PRODUCT, PRODUCT_HOVERED } from "./actions";

export const hover = (
	state = {
		productHovered: {
			hovered: false,
			productID: 0,
			rating: 0,
		},
	},
	action
) => {
	switch (action.type) {
		case PRODUCT_HOVERED:
			const { bool, hoveredProductID, hoveredRating } = action.payload;
			return {
				...state,
				productHovered: {
					bool,
					hoveredProductID,
					hoveredRating,
				},
			};

		default:
			return state;
	}
};

export const products = (
	state = {
		list: [],
	},
	action
) => {
	switch (action.type) {
		case LOAD_PRODUCTS:
			return { list: action.payload };

		case UPDATE_PRODUCT:
			const { productID, clickedRating } = action.payload;
			return {
				...state,
				list: state.list.map((product) => {
					if (product.id === productID) {
						return {
							...product,
							rating: clickedRating,
						};
					} else {
						return product;
					}
				}),
			};

		default:
			return state;
	}
};

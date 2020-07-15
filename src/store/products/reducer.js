import { LOAD_PRODUCTS, UPDATE_PRODUCT } from "./actions";

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

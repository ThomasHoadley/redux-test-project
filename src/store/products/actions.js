export const LOAD_PRODUCTS = "LOAD_PRODUCTS";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const loadProducts = () => ({
	type: LOAD_PRODUCTS,
	payload: [
		{
			id: 1,
			title: "Nike Trainers",
			description: "Some Nike trainers you might like to buy",
			rating: 2,
		},
		{
			id: 2,
			title: "Addidas Trainers",
			description: "Some Addidas trainers you might like to buy",
			rating: 3,
		},
		{
			id: 3,
			title: "Puma Trainers",
			description: "Some Puma trainers you might like to buy",
			rating: 3,
		},
		{
			id: 4,
			title: "New Balance Trainers",
			description: "Some New Balance trainers you might like to buy",
			rating: 3,
		},
	],
});

export const updateProduct = (productID, rating) => ({
	type: UPDATE_PRODUCT,
	payload: [
		{
			productID,
			rating,
		},
	],
});

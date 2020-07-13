import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadProducts } from "./store/products/actions";
import Product from "./Product";

function Products() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.products.list);
	const productHovered = useSelector((state) => state.hover.productHovered);

	useEffect(() => {
		dispatch(loadProducts());
	}, []);

	return (
		<div className="products">
			{products.map((product) => (
				<Product
					product={product}
					productHovered={productHovered}
					key={product.id}
				/>
			))}
		</div>
	);
}

export default Products;

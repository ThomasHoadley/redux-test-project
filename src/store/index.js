import { createStore, combineReducers } from "redux";
import { products } from "./products/reducer";

const reducers = combineReducers({
	products,
});

const store = createStore(reducers);

export default store;

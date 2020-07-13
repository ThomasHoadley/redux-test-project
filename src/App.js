import React from "react";
import { Provider } from "react-redux";
import Products from "./Products";
import "./App.css";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<header className="App-header">
					<div className="inner-container">
						<h1 class="logo">
							Products<span className="blue">R</span>Us
						</h1>
					</div>
				</header>
				<div className="inner-container">
					<h3 class="strapline">Products for sale</h3>
					<Products />
				</div>
			</div>
		</Provider>
	);
}

export default App;

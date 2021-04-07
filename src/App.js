import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import NotFound from "./views/NotFound";
import Product from "./views/Product"

import Navbar from "./components/Navbar";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Redirect exact path="/" to="/home" />
				<Route exact path="/home" component={Home} />
				<Route exact path="/about" component={About} />
        <Route exact path="/product/:id" component={Product} />
				<Route component={NotFound} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;

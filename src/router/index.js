import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import { Product, ProductList, NotFound, Contact, About } from '../containers';

const router = () => {
	return (
		<Switch>
			<Route path="/list" component={ProductList} />
			<Route path="/product/:id" component={Product} />
			<Route path="/contact" component={Contact} />
			<Route path="/about" component={About} />
			<Redirect exact from='/' to="/list"  />
			<Route path="*" component={NotFound} />
		</Switch>
	);
}

export default router;
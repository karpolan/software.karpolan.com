import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Product, ProductList, NotFound, Contact, About } from '../containers';

/**
 * Default Router of application
 */
const router = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProductList} />
      <Route path="/contact" component={Contact} />
      <Route path="/about" component={About} />

      <Redirect from="/product" to="/" />
      <Redirect from="/list" to="/" />
      <Route path="/error" component={NotFound} />
      <Route path="/404" component={NotFound} />

      <Route path="/:id" component={Product} />
      <Route path="*" component={NotFound} />
    </Switch>
  );
};

export default router;

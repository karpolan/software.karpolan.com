import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Product, ProductList, NotFound, Contact, About } from '../containers';

/**
 * Default Router of application
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<ProductList />} />
    <Route path="/index.html" element={<ProductList />} />

    <Route path="/contact/*" element={<Contact />} />
    <Route path="/about/*" element={<About />} />

    <Route path="/product" element={<Navigate replace to="/" />} />
    <Route path="/list" element={<Navigate replace to="/" />} />

    <Route path="/error" element={<NotFound />} />
    <Route path="/404" element={<NotFound />} />

    <Route path="/:id/*" element={<Product />} />
    {/* <Route path=":id/index.html" element={<Product />} /> */}
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

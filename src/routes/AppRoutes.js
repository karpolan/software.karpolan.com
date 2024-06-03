import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Product, ProductList, NotFound, Contact, About } from '../views';

/**
 * Default Router of application
 */
const AppRoutes = () => (
  <Routes>
    <Route path="/product" element={<Navigate replace to="/index.html" />} />
    <Route path="/list" element={<Navigate replace to="/index.html" />} />

    <Route path="/index.html" element={<ProductList />} />
    <Route path="/" element={<ProductList />} />

    <Route path="/contact/index.html" element={<Contact />} />
    <Route path="/contact" element={<Contact />} />

    <Route path="/about/index.html" element={<About />} />
    <Route path="/about" element={<About />} />

    <Route path="/error/index.html" element={<NotFound />} />
    <Route path="/error" element={<NotFound />} />
    <Route path="/404.html" element={<NotFound />} />
    <Route path="/404" element={<NotFound />} />

    <Route path="/:id/index.html" element={<Product />} />
    <Route path="/:id" element={<Product />} />

    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;

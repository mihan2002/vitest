// controllers/productController.js

import * as ProductModel from '../models/productModel.js';

export const createProduct = (req, res) => {
  const product = ProductModel.createProduct(req.body);
  res.status(201).json(product);
};

export const getProducts = (req, res) => {
  const products = ProductModel.getProducts();
  res.json(products);
};

export const getProductById = (req, res) => {
  const product = ProductModel.getProductById(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

export const updateProduct = (req, res) => {
  const product = ProductModel.updateProduct(req.params.id, req.body);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

export const deleteProduct = (req, res) => {
  const product = ProductModel.deleteProduct(req.params.id);
  if (product) res.json(product);
  else res.status(404).json({ message: 'Product not found' });
};

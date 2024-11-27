// models/productModel.js

let products = [];
let idCounter = 1;

export const createProduct = (productData) => {
  const newProduct = { id: idCounter++, ...productData };
  products.push(newProduct);
  return newProduct;
};

export const getProducts = () => {
  return products;
};

export const getProductById = (id) => {
  return products.find((product) => product.id === Number(id));
};

export const updateProduct = (id, productData) => {
  const index = products.findIndex((product) => product.id === Number(id));
  if (index !== -1) {
    products[index] = { id: Number(id), ...productData };
    return products[index];
  }
  return null;
};

export const deleteProduct = (id) => {
  const index = products.findIndex((product) => product.id === Number(id));
  if (index !== -1) {
    const deletedProduct = products.splice(index, 1);
    return deletedProduct[0];
  }
  return null;
};

// For testing purposes
export const resetProducts = () => {
  products = [];
  idCounter = 1;
};

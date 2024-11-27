// routes/productRoutes.js

import express from 'express';
import * as ProductController from '../controllers/productController.js';

const router = express.Router();

router.post('/', ProductController.createProduct);
router.get('/', ProductController.getProducts);
router.get('/:id', ProductController.getProductById);
router.put('/:id', ProductController.updateProduct);
router.delete('/:id', ProductController.deleteProduct);

export default router;

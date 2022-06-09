import express from 'express';
import ProductController from './controllers/productController';

const productController = new ProductController();
const app = express();

app.use(express.json());
app.get('/products', productController.listAll);

export default app;

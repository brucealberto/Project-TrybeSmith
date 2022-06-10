import express from 'express';
import ProductController from './controllers/productController';
import validateAmount from './middlewares/validateAmount';
import validateName from './middlewares/validateName';

const productController = new ProductController();
const app = express();

app.use(express.json());
app.get('/products', productController.listAll);
app.post('/products', validateName, validateAmount, productController.create);

export default app;

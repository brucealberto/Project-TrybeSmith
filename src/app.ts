import express from 'express';
import OrderCOntroller from './controllers/orderController';
import ProductController from './controllers/productController';
import UserController from './controllers/userController';
import validateAmount from './middlewares/validateAmount';
import validateClasse from './middlewares/validateClasse';
import validateLevel from './middlewares/validateLevel';
import validateName from './middlewares/validateName';
import validatePassword from './middlewares/validatePassword';
import validateUserName from './middlewares/validateUserName';

const productController = new ProductController();
const userController = new UserController();
const orderController = new OrderCOntroller();
const app = express();

app.use(express.json());
// Products
app.get('/products', productController.listAll);
app.post('/products', validateName, validateAmount, productController.create);
// Users
app.post(
  '/users',
  validateUserName,
  validateClasse,
  validateLevel,
  validatePassword,
  userController.create,
);
// Orders
app.get('/orders', orderController.allOrders);
export default app;

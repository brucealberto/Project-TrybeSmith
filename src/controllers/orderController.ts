import { StatusCodes } from 'http-status-codes';
import OrderServices from '../services/orderService';
import ControllerFunction from '../types/ControllerFunc.types';

export default class OrderController {
  public orderService = new OrderServices();

  public allOrders: ControllerFunction = async (req, res) => {
    const orders = await this.orderService.allOrders();
    return res.status(StatusCodes.OK).json(orders);
  }; 
}
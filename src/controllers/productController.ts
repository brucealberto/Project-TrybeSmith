import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';

export default class ProductController {
  public service = new ProductService();

  public listAll = async (req: Request, res: Response, _next: NextFunction):Promise<Response> => {
    const products = await this.service.listAll();
    return res.status(StatusCodes.OK).json(products);
  };
}
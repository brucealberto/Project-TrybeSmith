// import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import ProductService from '../services/productService';
import ControllerFunction from '../types/ControllerFunc.types';

export default class ProductController {
  public service = new ProductService();

  public listAll: ControllerFunction = async (req, res, _next) => {
    const products = await this.service.listAll();
    return res.status(StatusCodes.OK).json(products);
  };

  public create: ControllerFunction = async (req, res, _next) => {
    const { name, amount } = req.body;
    const products = await this.service.create(name, amount);
    return res.status(StatusCodes.CREATED).json(products);
  };
}
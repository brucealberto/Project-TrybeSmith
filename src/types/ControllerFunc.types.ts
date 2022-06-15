import { Request, Response, NextFunction } from 'express';

type ControllerFunction = (
  req: Request,
  res: Response,
  next?: NextFunction
) => Promise<Response>;

export default ControllerFunction;
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

const validateAmount = (req: Request, res: Response, next: NextFunction) => {
  const { amount } = req.body;
  if (!amount) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '"amount" is required' });
  }
  if (typeof amount !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" must be a string' });
  }
  if (amount.length < 3) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"amount" length must be at least 3 characters long' });
  }

  next();
};

export default validateAmount;
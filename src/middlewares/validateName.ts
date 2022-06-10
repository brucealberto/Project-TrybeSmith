// import Joi from 'joi';
import { StatusCodes } from 'http-status-codes';
import { NextFunction, Request, Response } from 'express';

// const validateJoi = Joi.object({
//   name: Joi.string().min(2).required(),
//   amount: Joi.string().min(2).required(),
// });
const validateName = (req: Request, res: Response, next: NextFunction) => {
  const { name } = req.body;
  console.log('NAME', typeof '');
  if (!name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '"name" is required' });
  }
  if (typeof name !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" must be a string' });
  }
  if (name.length < 2) {
    // console.log('name.length', name.length);
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"name" length must be at least 3 characters long' });
  }
  next();
};

export default validateName;

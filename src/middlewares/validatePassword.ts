import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const validatePassword = (req: Request, res: Response, next: NextFunction) => {
  console.log('PASWWOOOOOOOOORD');
  const { password } = req.body;
  if (!password) res.status(StatusCodes.BAD_REQUEST).json({ message: '"password" is required' });
  
  if (typeof password !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" must be a string' });
  }
  if (password.length < 8) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"password" length must be at least 8 characters long',
      });
  }
  next();
};
export default validatePassword;

import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const validateUserName = (req: Request, res: Response, next: NextFunction) => {
  console.log('VALIDUSERNAME');
  const { username } = req.body;
  if (!username) res.status(StatusCodes.BAD_REQUEST).json({ message: '"username" is required' });
  if (typeof username !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" must be a string' });
  }
  if (username.length < 3) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"username" length must be at least 3 characters long',
      });
  }
  next();
};
export default validateUserName;

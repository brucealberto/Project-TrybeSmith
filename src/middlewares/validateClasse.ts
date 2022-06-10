import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

const validateClasse = (req: Request, res: Response, next: NextFunction) => {
  const { classe } = req.body;
  if (!classe) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ message: '"classe" is required' });
  }
  if (typeof classe !== 'string') {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" must be a string' });
  }
  if (classe.length < 3) {
    return res
      .status(StatusCodes.UNPROCESSABLE_ENTITY)
      .json({ message: '"classe" length must be at least 3 characters long',
      });
  }
  next();
};
export default validateClasse;

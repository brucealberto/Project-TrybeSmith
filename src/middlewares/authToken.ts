// import jwt from 'jsonwebtoken';
// import { StatusCodes } from 'http-status-codes';
// import { NextFunction, Request, Response } from 'express';

// const secretPassword = 'secretPassword';

// const authToken = async (req: Request, res: Response, next: NextFunction):Promise<Response> => {
//   const tokenHeader:string = req.headers.authorization;
//   const decoded = jwt.verify(tokenHeader, secretPassword);
  
//   next();
// };
// export default authToken;

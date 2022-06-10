import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/userService';
import token from '../utils/generateToken';

export default class UserController {
  public userService = new UserService();

  public create = async (req: Request, res: Response):Promise<Response> => {
    const { username, classe, level, password } = req.body;
    const user = await this.userService.create(username, classe, level, password);
    console.log('USERCONTROLLERRR');
    
    return res.status(StatusCodes.CREATED).json({ token: token(user) });
  };
}
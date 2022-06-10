import UserModel from '../models/userModel';
import User from '../types/User.types';

export default class UserService {
  public userModel = new UserModel();

  public create = async (username:string, classe:string, level:number, password:string)
  :Promise<User> => {
    // const userModel = new UserModel();
    // const user = await userModel.create(username, classe, level, password);
    const user = await this.userModel.create(username, classe, level, password);
    console.log('USERSERVIIICE');
    
    return user;
  };
}
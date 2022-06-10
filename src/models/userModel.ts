import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import User from '../types/User.types';

export default class UserModel {
  public create = async (
    username: string,
    classe: string,
    level: number,
    password: string,
  ): Promise<User> => {
    const query = `INSERT INTO Trybesmith.Users (username, classe, level, password) 
    VALUES (?, ?, ?, ?)`;
    const [user] = await connection.execute<ResultSetHeader>(query, [
      username,
      classe,
      level,
      password,
    ]);
    console.log('USERMODEELLL');
    
    return { id: user.insertId, username, classe, level, password };
  };
}

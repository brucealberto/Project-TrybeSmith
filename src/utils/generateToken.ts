import jwt, { SignOptions } from 'jsonwebtoken';
import User from '../types/User.types';

const secretPassword = 'secretPassword';

const jwtConfig: SignOptions = { expiresIn: '20h', algorithm: 'HS256' };

const generateToken = (payload: User) => {
  const token = jwt
    .sign({ data: payload }, secretPassword, jwtConfig);
  return token;
};

export default generateToken;
import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../types/Product.types';

export default class ProductModel {
  public listAll = async (): Promise<Product[]> => {
    const query = 'SELECT * FROM Trybesmith.Products';
    const [products] = await connection.execute(query);
    return products as Product[];
  };

  public create = async (name: string, amount: string): Promise<Product> => {
    const query = `INSERT INTO Trybesmith.Products (name, amount) 
    VALUES (?,?);`;
    const [product] = await connection.execute<ResultSetHeader>(query, [name, amount]);
    return { id: product.insertId, name, amount };
  };
}

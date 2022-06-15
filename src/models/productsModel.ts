import { ResultSetHeader } from 'mysql2';
import connection from './connection';
import Product from '../types/Product.types';
import ProductsIds from '../types/ProductsIds';

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

  // Função necessária para o requisito 4
  public listById = async (id: number) => {
    const query = `SELECT GROUP_CONCAT(id) as productsIds
     FROM Trybesmith.Products WHERE orderId = ?`;
    const [result] = await connection.execute(query, [id]);
    return result as [ProductsIds];
  };
}

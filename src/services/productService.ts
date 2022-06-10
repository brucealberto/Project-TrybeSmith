import ProductModel from '../models/productsModel';
import Product from '../types/Product.types';

export default class ProductService {
  public productModel = new ProductModel();

  public listAll = async (): Promise<Product[]> => {
    const products = await this.productModel.listAll();
    return products;
  };

  public create = async (name: string, amount: string): Promise<Product> => {
    const product = await this.productModel.create(name, amount);
    return product;
  };
}

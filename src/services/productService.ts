import ProductModel from '../models/productsModel';
import Product from '../types/Product.types';

export default class ProductService {
  public model = new ProductModel();

  public listAll = async (): Promise<Product[]> => {
    const products = await this.model.listAll();
    return products;
  };

  public create = async (name: string, amount: string) :Promise<Product> => {
    const product = await this.model.create(name, amount);
    return product;
  };
}

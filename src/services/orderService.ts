import OrderModel from '../models/orderModel';
import ProductModel from '../models/productsModel';

export default class OrderServices {
  public orderModel = new OrderModel();

  public productModel = new ProductModel();

  public allOrders = async () => {
    const orders = await this.orderModel.listOrders();
    const promises = orders.map(async (order) => {
      const arrayProductsIds = await this.productModel.listById(order.id);
      const productsArr = arrayProductsIds[0].productsIds.split(',');
      return { ...order, productsIds: productsArr.map(Number) };
    });
    const resolvePromise = await Promise.all(promises);
    return resolvePromise;
  };
}

/**
 *  public allOrders = async () => {
    console.log('CHEGOU ORDERSERVICE');
    const orders = await this.orderModel.allOrders();
    const data: unknown = orders.map((o, index) => {
      if (o.id === orders[index + 1].id) {
        o.productsIds = [o.productsIds, orders[index + 1].productsIds];
      }
      o.productsIds = [o.productsIds];
    });
    return data as OrdersArray[];
  };
 */
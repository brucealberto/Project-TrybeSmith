import Order from '../types/Order';
import connection from './connection';

export default class OrderModel {
  public listOrders = async () => {
    console.log('ORDERMODELL');
    const query = 'SELECT * FROM Trybesmith.Orders';
    const [orders] = await connection.execute(query);
    return orders as Order[];
  };

  // public allOrders = async () => {
  //   console.log('CHEGOU ORDERMODEL');
  //   const query = `SELECT o.id, u.id AS userId, p.id AS productsIds FROM Trybesmith.Orders AS o
  //   INNER JOIN Trybesmith.Users AS u
  //   ON o.userId = u.id
  //   INNER JOIN Trybesmith.Products AS p
  //   ON p.orderId = o.id GROUP BY p.id`;
  //   const [orders] = await connection.execute(query);
  //   return orders;
  // };
}

/**

 */

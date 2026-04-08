import { Order } from "../models/Order";
import { OrderRepository } from "./OrderRepository";

export class InMemoryOrderRepository implements OrderRepository {
  save(order: Order): void {
    console.log(`Order ${order.id} saved`);
  }
}

import { Order } from "../models/Order";
import { OrderRepository } from "../repositories/OrderRepository";
import { NotificationService } from "../notifications/NotificationService";
import { DiscountService } from "./DiscountService";

export class OrderService {
  constructor(
    private orderRepository: OrderRepository,
    private notificationService: NotificationService,
    private discountService: DiscountService
  ) {}

  processOrder(order: Order): void {
    const finalAmount = this.discountService.calculate(order.amount);
    console.log(`Final Amount: ${finalAmount}`);

    this.orderRepository.save(order);
    this.notificationService.notify(order);
  }
}

import { Order } from "./models/Order";
import { FestivalDiscount } from "./discounts/FestivalDiscount";
import { DiscountService } from "./services/DiscountService";
import { InMemoryOrderRepository } from "./repositories/InMemoryOrderRepository";
import { EmailNotificationService } from "./notifications/EmailNotificationService";
import { OrderService } from "./services/OrderService";

const order = new Order(101, 1000);

const discountService = new DiscountService(new FestivalDiscount());
const repository = new InMemoryOrderRepository();
const notificationService = new EmailNotificationService();

const orderService = new OrderService(
  repository,
  notificationService,
  discountService
);

orderService.processOrder(order);

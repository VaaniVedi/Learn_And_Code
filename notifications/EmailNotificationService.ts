import { Order } from "../models/Order";
import { NotificationService } from "./NotificationService";

export class EmailNotificationService implements NotificationService {
  notify(order: Order): void {
    console.log(`Email sent for Order ${order.id}`);
  }
}

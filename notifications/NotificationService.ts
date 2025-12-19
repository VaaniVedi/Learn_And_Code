import { Order } from "../models/Order";

export interface NotificationService {
  notify(order: Order): void;
}

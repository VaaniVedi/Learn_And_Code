// SRP
class Order {
  constructor(
    public readonly id: number,
    public readonly amount: number
  ) {}
}

// OCP
interface DiscountStrategy {
  apply(amount: number): number;
}

class NoDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount;
  }
}

class FestivalDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount * 0.8;
  }
}

// LSP
class DiscountService {
  constructor(private strategy: DiscountStrategy) {}

  calculate(amount: number): number {
    return this.strategy.apply(amount);
  }
}

// ISP
interface OrderRepository {
  save(order: Order): void;
}

interface NotificationService {
  notify(order: Order): void;
}

// DIP
class InMemoryOrderRepository implements OrderRepository {
  save(order: Order): void {
    console.log(`Order ${order.id} saved`);
  }
}

class EmailNotificationService implements NotificationService {
  notify(order: Order): void {
    console.log(`Email sent for Order ${order.id}`);
  }
}

// DIP (high-level module)
class OrderService {
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

//Entry Point
const order = new Order(101, 1000);

const discountStrategy = new FestivalDiscount();
const discountService = new DiscountService(discountStrategy);

const repository = new InMemoryOrderRepository();
const notificationService = new EmailNotificationService();

const orderService = new OrderService(
  repository,
  notificationService,
  discountService
);

orderService.processOrder(order);


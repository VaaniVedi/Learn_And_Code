import { Customer } from "./Customer";

export class Paperboy {
  collectPayment(customer: Customer, amount: number): void {
    customer.pay(amount);
  }
}

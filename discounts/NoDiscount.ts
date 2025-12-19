import { DiscountStrategy } from "./DiscountStrategy";

export class NoDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount;
  }
}

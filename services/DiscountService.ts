import { DiscountStrategy } from "../discounts/DiscountStrategy";

export class DiscountService {
  constructor(private strategy: DiscountStrategy) {}

  calculate(amount: number): number {
    return this.strategy.apply(amount);
  }
}

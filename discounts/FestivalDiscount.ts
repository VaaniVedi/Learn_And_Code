import { DiscountStrategy } from "./DiscountStrategy";

export class FestivalDiscount implements DiscountStrategy {
  apply(amount: number): number {
    return amount * 0.8;
  }
}

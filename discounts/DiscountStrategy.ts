export interface DiscountStrategy {
  apply(amount: number): number;
}

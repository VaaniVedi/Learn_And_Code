import { EarningStrategy } from "../models/EarningStrategy";

export class BrandDealEarningStrategy implements EarningStrategy {
  private baseAmount: number;

  constructor(baseAmount: number) {
    this.baseAmount = baseAmount;
  }

  public calculateEarnings(): number {
    return this.baseAmount;
  }
}

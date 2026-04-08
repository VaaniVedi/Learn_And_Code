import { EarningStrategy } from "../models/EarningStrategy";

export class AdsEarningStrategy implements EarningStrategy {
  private views: number;
  private ratePerView: number;

  constructor(views: number, ratePerView: number = 0.05) {
    this.views = views;
    this.ratePerView = ratePerView;
  }

  public calculateEarnings(): number {
    return this.views * this.ratePerView;
  }
}
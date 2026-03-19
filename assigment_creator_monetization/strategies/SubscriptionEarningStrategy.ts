import { EarningStrategy } from "../models/EarningStrategy";

export class SubscriptionEarningStrategy implements EarningStrategy {
  private subscriberCount: number;
  private amountPerSubscriber: number;

  constructor(subscriberCount: number, amountPerSubscriber: number = 2) {
    this.subscriberCount = subscriberCount;
    this.amountPerSubscriber = amountPerSubscriber;
  }

  public calculateEarnings(): number {
    return this.subscriberCount * this.amountPerSubscriber;
  }
}

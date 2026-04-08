import { EarningStrategy } from "./EarningStrategy";

export class Creator {
  private name: string;
  private earningStrategies: EarningStrategy[] = [];

  constructor(name: string) {
    this.name = name;
  }

  public addEarningStrategy(strategy: EarningStrategy): void {
    this.earningStrategies.push(strategy);
  }

  public calculateTotalEarnings(): number {
    return this.earningStrategies.reduce(
      (totalEarnings, strategy) => totalEarnings + strategy.calculateEarnings(),
      0
    );
  }

  public displayEarnings(): void {
    console.log(`${this.name} earned $${this.calculateTotalEarnings()}`);
  }
}
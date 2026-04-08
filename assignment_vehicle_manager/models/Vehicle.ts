export abstract class Vehicle {
  protected make: string;
  protected model: string;
  protected year: number;
  protected price!: number;
  protected isRunning: boolean = false;

  constructor(make: string, model: string, year: number, price: number) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.setPrice(price);
  }

  public setPrice(price: number): void {
    if (price < 0 || price > 1_000_000) {
      throw new Error("Invalid price value");
    }
    this.price = price;
  }

  public getPrice(): number {
    return this.price;
  }

  public abstract getKind(): string;

  public abstract start(): void;
  public abstract stop(): void;
  public abstract displayInfo(): void;
}

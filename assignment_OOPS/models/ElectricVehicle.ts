import { Vehicle } from "./Vehicle";

export abstract class ElectricVehicle extends Vehicle {
  protected batteryLevel!: number;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    batteryLevel: number
  ) {
    super(make, model, year, price);
    this.setBatteryLevel(batteryLevel);
  }

  public setBatteryLevel(batteryLevel: number): void {
    if (batteryLevel < 0 || batteryLevel > 100) {
      throw new Error('Battery level must be between 0 and 100');
    }
    this.batteryLevel = batteryLevel;
  }

  public charge(amount: number): void {
    this.setBatteryLevel(this.batteryLevel + amount);
  }

  public start(): void {
    if (this.batteryLevel <= 0) {
      throw new Error('Cannot start vehicle with no battery');
    }
    this.isRunning = true;
  }

  public stop(): void {
    this.isRunning = false;
  }
}
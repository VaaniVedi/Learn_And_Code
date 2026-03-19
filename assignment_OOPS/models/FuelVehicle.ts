import { Vehicle } from "./Vehicle";

export abstract class FuelVehicle extends Vehicle {
  protected fuelLevel!: number;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    fuelLevel: number
  ) {
    super(make, model, year, price);
    this.setFuelLevel(fuelLevel);
  }

  public setFuelLevel(fuelLevel: number): void {
    if (fuelLevel < 0 || fuelLevel > 100) {
      throw new Error('Fuel level must be between 0 and 100');
    }
    this.fuelLevel = fuelLevel;
  }

  public refuel(amount: number): void {
    this.setFuelLevel(this.fuelLevel + amount);
  }

  public start(): void {
    if (this.fuelLevel <= 0) {
      throw new Error('Cannot start vehicle with no fuel');
    }
    this.isRunning = true;
  }

  public stop(): void {
    this.isRunning = false;
  }
}
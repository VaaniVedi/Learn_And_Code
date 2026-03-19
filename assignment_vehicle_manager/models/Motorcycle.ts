import { FuelVehicle } from "./FuelVehicle";

export class Motorcycle extends FuelVehicle {
  private hasSidecar: boolean;

  constructor(
    make: string,
    model: string,
    year: number,
    price: number,
    fuelLevel: number,
    hasSidecar: boolean,
  ) {
    super(make, model, year, price, fuelLevel);
    this.hasSidecar = hasSidecar;
  }

  public displayInfo(): void {
    console.log(
      `Motorcycle: ${this.year} ${this.make} ${this.model}, Sidecar: ${this.hasSidecar}, Price: $${this.price}`,
    );
  }

  public getKind(): string {
    return "Motorcycle";
  }
}

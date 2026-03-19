import { FuelVehicle } from "./FuelVehicle";

export class Car extends FuelVehicle {

  public displayInfo(): void {
    console.log(
      `Car: ${this.year} ${this.make} ${this.model}, Price: $${this.price}`
    );
  }
}
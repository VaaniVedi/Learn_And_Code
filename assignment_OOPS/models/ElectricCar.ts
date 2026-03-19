import { ElectricVehicle } from "./ElectricVehicle";

export class ElectricCar extends ElectricVehicle {

  public displayInfo(): void {
    console.log(
      `Electric Car: ${this.year} ${this.make} ${this.model}, Price: $${this.price}`
    );
  }
}
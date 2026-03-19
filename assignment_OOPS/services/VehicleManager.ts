import { Vehicle } from "../models/Vehicle";

export class VehicleManager {
  private vehicles: Vehicle[] = [];

  public addVehicle(vehicle: Vehicle): void {
    this.vehicles.push(vehicle);

    const vehicleType = vehicle.constructor.name;

    if (vehicleType === "Car") {
      console.log("Car added");
    } else if (vehicleType === "Motorcycle") {
      console.log("Motorcycle added");
    } else if (vehicleType === "ElectricCar") {
      console.log("Electric car added");
    }
  }

  public displayAll(): void {
    console.log("\n=== Vehicles ===");
    this.vehicles.forEach((vehicle) => vehicle.displayInfo());
  }

  public calculateTotalValue(): number {
    return this.vehicles.reduce(
      (totalValue, vehicle) => totalValue + vehicle.getPrice(),
      0
    );
  }

  public startAllVehicles(): void {
    this.vehicles.forEach((vehicle) => vehicle.start());
  }
}
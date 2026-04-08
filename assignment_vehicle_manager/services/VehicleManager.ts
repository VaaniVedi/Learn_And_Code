import { Vehicle } from "../models/Vehicle";

export class VehicleManager {
  private vehicles: Vehicle[] = [];

  public addVehicle(vehicle: Vehicle | null): void {
    if (!vehicle) {
      return;
    }

    this.vehicles.push(vehicle);

    console.log(`${vehicle.getKind()} added`);
  }

  public displayAll(): void {
    console.log("\n=== Vehicles ===");
    this.vehicles.forEach((vehicle) => vehicle.displayInfo());
  }

  public calculateTotalValue(): number {
    return this.vehicles.reduce(
      (totalValue, vehicle) => totalValue + vehicle.getPrice(),
      0,
    );
  }

  public startAllVehicles(): void {
    this.vehicles.forEach((vehicle) => vehicle.start());
  }
}

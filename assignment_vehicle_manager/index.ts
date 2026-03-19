import { Car } from "./models/Car";
import { Motorcycle } from "./models/Motorcycle";
import { ElectricCar } from "./models/ElectricCar";
import { VehicleManager } from "./services/VehicleManager";

const car = new Car("Honda", "Accord", 2023, 28000, 100);
const motorcycle = new Motorcycle("Harley", "Street 750", 2022, 7500, 80, false);
const electricCar = new ElectricCar("Tesla", "Model 3", 2023, 42000, 100);

const vehicleManager = new VehicleManager();

vehicleManager.addVehicle(car);
vehicleManager.addVehicle(motorcycle);
vehicleManager.addVehicle(electricCar);

vehicleManager.displayAll();

console.log(`Total Value: $${vehicleManager.calculateTotalValue()}`);

vehicleManager.startAllVehicles();
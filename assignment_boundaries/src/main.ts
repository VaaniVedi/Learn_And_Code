import { validateLocation } from "./validator";
import { getLocations } from "./service";
import { printLocations } from "./formatter";

async function main() {
  try {
    const input = process.argv[2]; 

    validateLocation(input);

    const locations = await getLocations(input);

    printLocations(locations);

  } catch (error: any) {
    console.error("Error:", error.message);
  }
}

main();
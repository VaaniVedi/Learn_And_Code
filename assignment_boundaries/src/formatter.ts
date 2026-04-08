export function printLocations(locations: any[]) {
  locations.forEach((loc, index) => {
    console.log(`\nResult ${index + 1}`);
    console.log(`Name: ${loc.name}`);
    console.log(`Latitude: ${loc.latitude}`);
    console.log(`Longitude: ${loc.longitude}`);
  });
}
import * as readline from "readline";

const userInputReader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const countryBorders: Record<string, string[]> = {
  IN: ["Pakistan", "China", "Nepal", "Bhutan", "Bangladesh", "Myanmar"],
  US: ["Canada", "Mexico"],
  NZ: [],
  CN: ["India", "Pakistan", "Nepal", "Bhutan", "Myanmar", "Laos", "Vietnam"],
  PK: ["India", "China", "Afghanistan", "Iran"],
  NP: ["India", "China"],
  BT: ["India", "China"],
  BD: ["India", "Myanmar"],
  MM: ["India", "China"],
  JP: [],
  KR: ["North Korea"],
  KP: ["China", "Russia", "South Korea"],
};

function displayBorderingCountries(countryCode: string): void {
  const code = countryCode.toUpperCase();
  const borderList = countryBorders[code];

  if (!borderList) {
    console.log("Invalid country code.");
    return;
  }

  if (borderList.length === 0) {
    console.log("This country has no adjacent countries.");
    return;
  }

  console.log("Adjacent countries:");
  borderList.forEach((border) => console.log("- " + border));
}

console.log("Available country codes:");
console.log(Object.keys(countryBorders).join(", "));

userInputReader.question("\nEnter a country code: ", (inputText) => {
  displayBorderingCountries(inputText.trim());
  userInputReader.close();
});

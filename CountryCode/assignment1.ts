import * as readline from "readline";

const consoleInput = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Country codes and neighbors
const borderingCountries: Record<string, string[]> = {
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
    KP: ["China", "Russia", "South Korea"]
};

function showNeighbors(code: string): void {
    const upper = code.toUpperCase();
    const neighbours = borderingCountries[upper];

    if (!neighbours) {
        console.log("Invalid country code.");
        return;
    }

    if (neighbours.length === 0) {
        console.log("This country has no adjacent countries.");
        return;
    }

    console.log("Adjacent countries:");
    neighbours.forEach(n => console.log("- " + n));
}

// Show list first
console.log("Available country codes:");
console.log(Object.keys(borderingCountries).join(", "));

consoleInput.question("\nEnter a country code: ", (userInput) => {
    showNeighbors(userInput.trim());
    consoleInput.close();
});

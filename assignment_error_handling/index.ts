import { ATMService } from "./ATMService";
import { handleError } from "./ErrorHandler";

function main(): void {
  const atm = new ATMService();

  try {
    atm.withdraw("ACC123", 1000);
  } catch (error) {
    handleError(error);
  }
}

main();

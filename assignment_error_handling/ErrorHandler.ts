import {
  DeviceLockedException,
  NetworkConnectionException,
  InsufficientFundsException,
} from "./Exceptions";

export function handleError(error: unknown): void {
  if (error instanceof DeviceLockedException) {
    console.error("Device suspended");
  } else if (error instanceof NetworkConnectionException) {
    console.error("Connection issue");
  } else if (error instanceof InsufficientFundsException) {
    console.error("Insufficient funds");
  } else {
    console.error("Unknown error");
  }
}

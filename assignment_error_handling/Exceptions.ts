export class DeviceLockedException extends Error {
  constructor() {
    super("Device is suspended");
  }
}

export class InsufficientFundsException extends Error {
  constructor() {
    super("Insufficient funds");
  }
}

export class NetworkConnectionException extends Error {
  constructor() {
    super("Connection error");
  }
}

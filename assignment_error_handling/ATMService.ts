import { DeviceRecord } from "./Models";
import {
  DeviceLockedException,
  NetworkConnectionException,
  InsufficientFundsException,
} from "./Exceptions";

export class ATMService {
  withdraw(accountId: string, amount: number): void {
    const handle = this.getHandle();
    const record = this.retrieveDeviceRecord(handle);

    this.ensureDeviceActive(record);
    this.ensureConnection(record);
    this.ensureSufficientBalance(accountId, amount);

    this.dispenseCash(handle, amount);
    console.log("SUCCESS");
  }

  private ensureDeviceActive(record: DeviceRecord): void {
    if (record.getStatus() === "SUSPENDED") {
      throw new DeviceLockedException();
    }
  }

  private ensureConnection(record: DeviceRecord): void {
    if (record.getWifiConnection() !== "CONNECTED") {
      throw new NetworkConnectionException();
    }
  }

  private ensureSufficientBalance(accountId: string, amount: number): void {
    if (this.getBalance(accountId) < amount) {
      throw new InsufficientFundsException();
    }
  }

  private getHandle(): string {
    return "VALID_HANDLE";
  }

  private retrieveDeviceRecord(handle: string): DeviceRecord {
    return new DeviceRecord("ACTIVE", "CONNECTED");
  }

  private getBalance(accountId: string): number {
    return 500;
  }

  private dispenseCash(handle: string, amount: number): void {
    console.log(`Dispensing ${amount}`);
  }
}

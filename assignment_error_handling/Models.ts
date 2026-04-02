export class DeviceRecord {
  constructor(
    private status: string,
    private wifi: string,
  ) {}

  getStatus(): string {
    return this.status;
  }

  getWifiConnection(): string {
    return this.wifi;
  }
}

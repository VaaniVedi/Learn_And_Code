import { Wallet } from "./Wallet";

export class Customer {
  private wallet: Wallet;

  constructor(wallet: Wallet) {
    this.wallet = wallet;
  }

  pay(amount: number): void {
    this.wallet.withdraw(amount);
  }
}

export class Wallet {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  withdraw(amount: number): boolean {
    if (this.balance >= amount) {
      this.balance -= amount;
      return true;
    }

    return false;
  }
}

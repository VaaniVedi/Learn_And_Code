import { Wallet } from "./Wallet";
import { Customer } from "./Customer";
import { Paperboy } from "./Paperboy";

const wallet = new Wallet(100);
const customer = new Customer(wallet);
const paperboy = new Paperboy();

paperboy.collectPayment(customer, 30);

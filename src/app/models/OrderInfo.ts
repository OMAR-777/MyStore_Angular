import { CartItem } from "./CartItem";

export class OrderInfo {
    fullName: string;
    address: string;
    creditCardNumber: string;
    cartItems: CartItem[]
  
    constructor() {
      this.fullName = '';
      this.address = '';
      this.creditCardNumber = '';
      this.cartItems = [];
    }
  }
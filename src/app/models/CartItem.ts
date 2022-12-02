import { Product } from "./Product";

export class CartItem {
    product: Product;
    quantity: number;
  
    constructor() {
      this.product = {
        id: 0,
        name: '',
        price: 0,
        description: '',
        url: ''
      }
      this.quantity = -1;
    }
  }
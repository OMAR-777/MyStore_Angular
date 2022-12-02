import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];

  constructor() {}

  getCartItems(): CartItem[] {
    return this.cartItems;
  }

  addToCart(product: Product, quantity: number) {
    let existingCartItem = this.cartItems.find(
      (c) => c.product.id == product.id
    );
    if (existingCartItem) {
      existingCartItem.quantity = +existingCartItem.quantity + +quantity;
    } else {
      const cartItem = {
        product,
        quantity,
      };
      this.cartItems.push(cartItem);
    }
  }
}

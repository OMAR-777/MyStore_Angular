import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  cartItems: CartItem[] = [];

  constructor() {}

  addToCart(product: Product, quantity: number) {
    if(this.cartItems.find(c => c.product.id == product.id)){
    }
    const cartItem = {
      product,
      quantity,
    };
    this.cartItems.push(cartItem);
  }

}

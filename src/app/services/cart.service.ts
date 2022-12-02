import { Injectable } from '@angular/core';
import { CartItem } from '../models/CartItem';
import { Product } from '../models/Product';
import productsData from '../../assets/json/products.json';
import { OrderInfo } from '../models/OrderInfo';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems: CartItem[] = [];
  completedOrderInfo: OrderInfo;

  constructor() {
    this.completedOrderInfo = new OrderInfo();
    this.cartItems.push({
      product: productsData[0],
      quantity: 2,
    });
    this.cartItems.push({
      product: productsData[1],
      quantity: 1,
    });
  }

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
  removeCartItem(product: Product) {
    this.cartItems = this.cartItems.filter((ci) => ci.product.id != product.id);
  }
  updateQuantity(product: Product, quantity: number) {
    let foundCartItem = this.cartItems.find(
      (ci) => ci.product.id == product.id
    );
    foundCartItem!.quantity = quantity;
  }

  completeOrder(orderInfo: OrderInfo){
    this.completedOrderInfo = orderInfo;
  }
}

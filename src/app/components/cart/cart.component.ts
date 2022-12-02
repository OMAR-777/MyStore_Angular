import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];


  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }

  isEmpty(): boolean {
    return this.cartItems.length === 0;
  }

  getCartSum() {
    let sum = 0;
    this.cartItems.forEach(
      (cartItem) => (sum += cartItem.product.price * cartItem.quantity)
    );
    return sum;
  }

  onRemoveCartItem(product: Product){
    this.cartService.removeCartItem(product);
    this.cartItems = this.cartService.getCartItems();
  }

}

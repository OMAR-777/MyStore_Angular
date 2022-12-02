import { Component, OnInit } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];

  constructor(private cartService: CartService) {}

  getCartSum() {
    let sum = 0;
    this.cartItems.forEach(
      (cartItem) => (sum += cartItem.product.price * cartItem.quantity)
    );
    return sum;
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCartItems();
  }
}

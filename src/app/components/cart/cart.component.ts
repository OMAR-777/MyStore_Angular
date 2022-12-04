import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/CartItem';
import { OrderInfo } from 'src/app/models/OrderInfo';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: CartItem[] = [];
  orderInfo: OrderInfo = new OrderInfo();

  constructor(private cartService: CartService, private router: Router, private toastr:ToastrService) {}

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

  removeCartItem(product: Product){
    this.toastr.info(
      `${product.name} has been removed from cart`,
      'Removed from Cart!',
    );
    this.cartService.removeCartItem(product);
    this.cartItems = this.cartService.getCartItems();
  }

  onCartSubmit() {
    this.CompleteOrder();
  }

  onQuantityChange(cartItem: CartItem) {
    if (cartItem.quantity == 0) {
      this.removeCartItem(cartItem.product);
    } else {
      this.cartService.updateQuantity(cartItem.product, cartItem.quantity);
    }
  }

  CompleteOrder(){
    this.orderInfo.cartItems = this.cartItems;
    this.cartService.completeOrder(this.orderInfo);
    this.router.navigate(['confirmation']);
  }

}

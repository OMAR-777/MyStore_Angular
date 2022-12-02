import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent {
  @Input() product: Product;
  @Input() quantity: number;
  @Output() removeCartItem: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) {
    this.product = new Product();
    this.quantity = -1;
  }
  onQuantityChange() {
    if (this.quantity == 0) {
      this.removeCartItem.emit(this.product);
    } else {
      this.cartService.updateQuantity(this.product, this.quantity);
    }
  }
}

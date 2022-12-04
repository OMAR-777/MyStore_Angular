import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { CartItem } from 'src/app/models/CartItem';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  viewProviders: [ { provide: ControlContainer, useExisting: NgForm } ]
})
export class CartItemComponent {
  @Input() product!: Product;
  @Input() quantity!: number;
  @Output() onRemoveCartItem: EventEmitter<Product> = new EventEmitter();

  constructor(private cartService: CartService) {}
  onQuantityChange() {
    if (this.quantity == 0) {
      this.onRemoveCartItem.emit(this.product);
    } else {
      this.cartService.updateQuantity(this.product, this.quantity);
    }
  }
}

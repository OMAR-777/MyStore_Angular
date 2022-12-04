import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent {
  @Input() product: Product;
  quantity: number;

  constructor(private cartService: CartService, private toastr: ToastrService) {
    this.product = new Product();
    this.quantity = 1;
  }

  addToCart() {
    this.cartService.addToCart(this.product, this.quantity);
    this.toastr.success(
      `${this.quantity} ${this.product.name}(s) has been added to the cart`,
      'Added to Cart!',
    );

    this.quantity = 1;
  }
}

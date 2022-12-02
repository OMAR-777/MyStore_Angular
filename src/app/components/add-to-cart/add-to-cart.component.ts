import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent{
  @Input() product: Product;
  quantity: number;

  constructor(private cartService: CartService){
    this.product = new Product();
    this.quantity = 1;
  }

  addToCart(){
    this.cartService.addToCart(this.product, this.quantity);
    alert(`You have added ${this.quantity} amounts of product: ${this.product.name}`)
    this.quantity = 1;
  }

}

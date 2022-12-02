import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{
  @Input() product: Product;
  quantity: number;

  constructor(){
    this.product = new Product();
    this.quantity = 1;
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addToCart(){
    alert(`You have added ${this.quantity} amounts of product: ${this.product.name}`)
    this.quantity = 1;
  }

}

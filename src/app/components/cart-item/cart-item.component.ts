import { Component, OnInit, Input } from '@angular/core';
import { CartItem } from 'src/app/models/CartItem';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: CartItem;

  constructor(){
    this.cartItem = new CartItem();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  
}

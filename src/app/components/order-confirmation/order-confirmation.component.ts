import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfo } from 'src/app/models/OrderInfo';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  orderInfo: OrderInfo;

  constructor(private cartService: CartService) {
    this.orderInfo = new OrderInfo();
  }
  ngOnInit(): void {
    this.orderInfo = this.cartService.completedOrderInfo;
  }
}

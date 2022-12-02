import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfo } from 'src/app/models/OrderInfo';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
})
export class CheckoutFormComponent {
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';
  @Output() onSubmit: EventEmitter<OrderInfo> = new EventEmitter();

  constructor() {}

  onCartSubmit() {
    let orderInfo: OrderInfo = {
      fullName: this.fullName,
      address: this.address,
    };
    this.onSubmit.emit(orderInfo);
  }
}

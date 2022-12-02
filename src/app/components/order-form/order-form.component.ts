import { Component } from '@angular/core';

@Component({
  selector: 'app-order-form',
  templateUrl: './order-form.component.html',
  styleUrls: ['./order-form.component.css']
})
export class OrderFormComponent {
  fullName: string = '';
  address: string = '';
  creditCardNumber: string = '';

  onCartSubmit() {
    alert(
      'fullName: ' +
        this.fullName +
        '\n' +
        'address: ' +
        this.address +
        '\n' +
        'creditCardNumber: ' +
        this.creditCardNumber
    );
  }
}


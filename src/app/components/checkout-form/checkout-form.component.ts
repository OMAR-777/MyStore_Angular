import { Component, EventEmitter, Output, Input } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderInfo } from 'src/app/models/OrderInfo';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm }],
})
export class CheckoutFormComponent {
  @Input() fullName!: string;
  @Output() fullNameChange = new EventEmitter<string>();
  @Input() address!: string;
  @Output() addressChange = new EventEmitter<string>();
  @Input() creditCardNumber!: string;
  @Output() creditCardNumberChange = new EventEmitter<string>();

  constructor() {}
}

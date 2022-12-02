import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductItemComponent } from './components/product-item/product-item.component';
import { ProductItemDetailComponent } from './components/product-item-detail/product-item-detail.component';
import { FormsModule } from '@angular/forms';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutFormComponent } from './components/checkout-form/checkout-form.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    CartComponent,
    ProductItemComponent,
    ProductItemDetailComponent,
    AddToCartComponent,
    CartItemComponent,
    CheckoutFormComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

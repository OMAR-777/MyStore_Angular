import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}
  getProducts() {
    return this.http.get<Product[]>('../../assets/json/products.json');
  }

  getProductById(id: number): Observable<Product | undefined> {
    return this.http
      .get<Product[]>('../../assets/json/products.json')
      .pipe(map((products) => products.find((product) => product.id == id)));
  }
}

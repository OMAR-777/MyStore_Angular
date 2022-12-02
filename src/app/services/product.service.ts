import { Injectable } from '@angular/core';
import { Product } from '../models/Product';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import productsData from '../../assets/json/products.json';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[];
  constructor() {
    this.products = productsData;
  }
//TODO: I might need to get products through HttpClient rather than importing directly from a json file.
  getProducts() {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    // return this.http
    //   .get<Product[]>('../../assets/json/products.json')
    //   .pipe(map((products) => products.find((product) => product.id == id)));
    return this.products.find(product=> product.id == id);
  }
}

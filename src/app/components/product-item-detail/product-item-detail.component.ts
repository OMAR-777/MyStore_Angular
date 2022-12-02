import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product: Product;

  constructor(private productService:ProductService, private router: ActivatedRoute){
    this.product = new Product();
  }

  ngOnInit(): void {
    let id = this.router.snapshot.paramMap.get('id') as unknown as number;
    this.productService.getProductById(id).subscribe(data => this.product = data as Product);
  }
}

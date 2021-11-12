import { Product } from './../../../../shared/models/product.model';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private api: ApiService) { }
  getProducts() {
    return this.api.get<{ data: Product[] }>('users').pipe(map((res) => res.data));
  }

  createProduct(product: Product) {
    return this.api
      .post<{ data: Product }>('create-product', product)
      .pipe(map((res) => res.data));
  }
 
  }


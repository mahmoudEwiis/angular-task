import { ApiService } from './../../Core/services/api.service';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SystemService {

  constructor(private ApiService: ApiService) { }

  getProducts() {
    return this.ApiService.get('products?limit=12');
  }
  getProductById(id: number) {
    return this.ApiService.get(`products/${id}`);
  }
}

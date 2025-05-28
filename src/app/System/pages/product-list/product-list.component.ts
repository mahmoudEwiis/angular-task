import { SystemService } from './../../service/system.service';
import { Component, OnInit } from '@angular/core';
import { CardComponent } from "../../../Shared/components/card/card.component";

@Component({
  selector: 'app-product-list',
  imports: [CardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent implements OnInit {

  products: any[] = [];
  loading = true;

  constructor(private SystemService: SystemService){}


  getProducts() {
    this.SystemService.getProducts().subscribe({
      next: (response:any) => {
        this.products = response.products || [];
        console.log('Products fetched successfully:', this.products);
        this.loading = false;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
        this.loading = false;
      }
    });
  }

  ngOnInit() {
    this.getProducts();
  }
}

// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CurrencyPipe } from '@angular/common';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-dashboard',
  imports: [CurrencyPipe , TableModule  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  selectedProducts: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products?limit=12').subscribe((res) => {
      this.products = res.products;
    });
  }

  exportCSV(table: any) {
    table.exportCSV();
  }
}

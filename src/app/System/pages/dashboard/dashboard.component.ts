// dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { ButtonModule } from 'primeng/button';
import { InputIconModule } from 'primeng/inputicon';
import { MultiSelectModule } from 'primeng/multiselect';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-dashboard',
  imports: [TableModule, CommonModule, InputTextModule, TagModule,
    SelectModule, MultiSelectModule, ButtonModule, IconFieldModule, InputIconModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  products: any[] = [];
  selectedProducts: any[] = [];
  exportColumns!: any[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products?limit=12').subscribe((res) => {
      this.products = res.products;
      this.exportColumns = this.products.map((product: any) => {
        return { title: product.name, dataKey: product.id };
      });
    });
  }

  onFilter(event: Event, field: string, table: any) {
  const input = event.target as HTMLInputElement;
  table.filter(input.value, field, 'contains');
}
  onFilterGlobal(event: Event, table: any) {
  const input = event.target as HTMLInputElement;
  table.filterGlobal(input.value,  'contains');
}
  exportCSV(table: any) {
    const data = Array.isArray(table.filteredValue) ? table.filteredValue : table.value;
    table.filteredValue = data;
    table.exportCSV();
  }
}

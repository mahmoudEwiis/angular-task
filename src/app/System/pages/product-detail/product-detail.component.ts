import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SystemService } from '../../service/system.service';
import { CurrencyPipe, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf , CurrencyPipe , RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {

  product: any;
  constructor(
    private route: ActivatedRoute,
    private SystemService: SystemService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.SystemService.getProductById(+id).subscribe(data => {
        this.product = data;
      });
    }
  }

}

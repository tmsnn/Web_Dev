import { Component, Output, Input } from '@angular/core';
import { Product } from '../products';


@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product: Product ;
  @Input() categ: string | undefined;
  see = true;
    constructor () {
      this.product = new Product;
    }
}

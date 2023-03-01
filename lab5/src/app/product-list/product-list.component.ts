import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = [...products];
  categ : string | undefined;
  link = '';

  share(url: string) {
    window.open(url, '_blank');
  }

  
constructor(private route: ActivatedRoute) { 
  this.route.url.subscribe(url => { 
    this.link = url.join('/'); 
    this.categ = this.link.split('/').pop();  
  }); 
}
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

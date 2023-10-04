import { Component } from '@angular/core';
// import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products :Array<any> | null =[]
  constructor(private productService:ProductService)
  {

  }
  ngOnInit()
  {
    this.products=this.productService.getProducts()
  }

}

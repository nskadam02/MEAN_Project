import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
  // providers: [CartService], // hirarcheal dependency injection
})
export class ProductComponent {
  @Input("value")
  product:any;

  currentTab:number= 1
  constructor(private cartService:CartService , private productService:ProductService) //dependency injection
  {

  }

  reviews:Array<any> | null=[
    {star:5,body:"Good product",author:"ns.kadam"},
    {star:4,body:"Nice product",author:"ns.kadam"}
  ]
  handleBuy(event:MouseEvent)
  {
    // const cartService=new CartService();
    this.cartService.addToCart(this.product)
  }
  handleTabChnage(index:number)
  {
    this.currentTab = index;
    if (this.currentTab===3)
    {
      this.reviews = this.productService.getReview(this.product.id);
    }
  }
  isTabSelected(tab:number):boolean
  {
    return this.currentTab===tab;
  }
  
  

}

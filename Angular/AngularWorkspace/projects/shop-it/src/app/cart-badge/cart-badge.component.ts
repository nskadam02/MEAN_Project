import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {
  
  cartCount!: number;
  constructor(private cartService:CartService)
  {

  }
  ngOnInit()
  {
    // this.cartCount=this.cartService.getCart().length
    this.cartService.cart$
    .subscribe((cart:Array<any>)=>{
      console.log("obervable")
      this.cartCount=cart.length;
    })
  }

}

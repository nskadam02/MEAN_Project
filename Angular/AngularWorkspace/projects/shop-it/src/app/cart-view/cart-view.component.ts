import { Component, ContentChild, ElementRef, Input, SimpleChanges, ViewChild } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-view',
  templateUrl: './cart-view.component.html',
  styleUrls: ['./cart-view.component.css']
})
export class CartViewComponent {

  cart: Array<any>=[];

  cart$ = this.cartService.cart$;   //reference to stream

  @ViewChild("cardBody")
  cardBody!:ElementRef;

  @ContentChild("comp")
  comp!:ElementRef

  constructor(private cartService:CartService)
  {
    console.log("cart view constructor")
  }
  ngOnChanges(changes:SimpleChanges)
  {
    
    console.log("cart view chanages")


  }
  ngOnInit()
  {
    console.log("cart view oninit")
    // this.cart=this.cartService.getCart()
  }
  
  ngAfterContentInit()
  {
    console.log("cart view contentinit")
    this.comp.nativeElement.style.color = "blue"
  }
  ngAfterViewInit()
  {
    console.log("cart view view init")
    this.cardBody.nativeElement.addEventListener("mouseenter",(e:any)=>{
     e.target.style.cursor = "pointer"
    })

  }
  ngOnDestroy()
  {
    console.log("cart view destroy")
  }
  
}

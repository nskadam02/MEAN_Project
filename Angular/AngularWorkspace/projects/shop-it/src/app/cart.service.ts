import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private _cart:Array<any>=[];
  // end with $ called stream  subject does not content itnial data
  cart$= new BehaviorSubject<Array<any>>(this._cart); //observable stre

  constructor() { }

  addToCart(item:any)
  {
    this._cart.push(item)
    console.log(this._cart)
    this.cart$.next(this._cart) //publish
  }
  getCart()
  {
    return this._cart
  }

}

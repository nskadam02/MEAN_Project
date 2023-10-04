import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

products:Array<any>=[
  {
  id: 1,
  name:"Laptop",
  price:{
    value:1000,
    code:'INR'
  },
  img:"assets/Laptop.png",
  isAvailable: true,
  description:"Laptop with hight battery power",
  specification:"1 TB HDD"
},
{
  id: 2,
  name:"Mobile",
  price:{
    value:2000,
    code:'EUR'
  },
  img:"assets/Mobile.png",
  isAvailable: true,
  description:"Mobile with high battery power",
  specification:"4 GB RAM"
}
]
  constructor() { }

  getProducts():Array<any> |null
  {
    return this.products
  }
  getReview(productId:number):Array<any> |null
  {
    return null
  }
}

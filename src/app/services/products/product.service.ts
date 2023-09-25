import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  itemList: any[] = [
    {
      name: 'tomato',
      price: 10000,
      img: 'assets/img/tomato.png'
    },
    {
      name: 'cherry',
      price: 10000,
      img: 'assets/img/cherry.png'
    },
    {
      name: 'onion',
      price: 10000,
      img: 'assets/img/onion.png'
    }
  ]

  cartList = new BehaviorSubject<any[]>( [] );
  constructor() { }

  getAllProduct():Observable<any[]> {
    return of(this.itemList);
  }

  updateCartList(item:any[]) {
    this.cartList.next(item);
  }

  getCartList():Observable<any[]> {
    return this.cartList;
  }
}

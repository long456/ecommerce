import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../services/products/product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: any[] = [];
  totalPrice: number = 0;
  userEmail: string = '';
  constructor(
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productService.getCartList().subscribe(data => {
      this.cartList =  data;
      if (this.cartList.length > 0) {
        this.cartList.forEach(item => {
          let price = item.quantity * item.price;
          this.totalPrice = this.totalPrice + price;
        })
      }
    })

  }

  getEmail(event:any) {
    this.userEmail = event.target.value
  }

  submitEmail() {
    localStorage.removeItem('user')
    localStorage.setItem('user', this.userEmail)
  }

  redirectToHome() {
    this.router.navigateByUrl("product")
  }

  checkOut() {
    alert('Your price is ' + this.totalPrice)
    localStorage.removeItem('cart')
    localStorage.setItem('cart', JSON.stringify(this.cartList))
  }

}

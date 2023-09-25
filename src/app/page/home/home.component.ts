import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../services/products/product.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  productList: any[] = [];
  cartObj:any = {}
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.productService.getAllProduct().subscribe(data => {
      this.productList =  data;
    })

    this.productService.getCartList().subscribe(data => {
      if (data) {
        data.forEach(item => {
          this.cartObj[item.name] = item;
        })
      }
    })
  }

  addToCart(item:any) {
    if (this.cartObj[item.name]) {
      this.cartObj[item.name].quantity ++
    } else {
      this.cartObj[item.name] = item
      this.cartObj[item.name].quantity = 1
    }

    this.productService.updateCartList(Object.values(this.cartObj))
  }

}

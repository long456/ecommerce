import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(
    private router: Router
  ) {
  }
  redirectToCart() {
    this.router.navigateByUrl("cart")
  }

  redirectToHome() {
    this.router.navigateByUrl("product")
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./page/home/home.component";
import {CartComponent} from "./page/cart/cart.component";

const routers: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: 'product',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routers)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }

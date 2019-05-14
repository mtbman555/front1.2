import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BgComponent } from './bg/bg.component';
import { SmComponent } from './sm/sm.component';
import { SpComponent } from './sp/sp.component';
import { PpComponent } from './pp/pp.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ProductService } from "./services/product.service"
import { StockService } from "./services/stock.service"
import { MainService } from "./services/main.service"
import { FoodService } from "./services/food.service"
import { CheckService } from "./services/check.service"
import { MemberService } from "./services/member.service"
import { UserService } from "./services/user.service"
import { MonthService } from "./services/month.service"
import { AccService } from "./services/acc.service";



const routes: Routes = [
  { path: '', redirectTo: '/bg', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'bg', component: BgComponent },
  { path: 'sm', component: SmComponent },
  { path: 'sp', component: SpComponent },
  { path: 'pp', component: PpComponent },
  { path: 'user', component: UserComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    BgComponent,
    SmComponent,
    SpComponent,
    PpComponent,
    UserComponent,
    LoginComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    SweetAlert2Module.forRoot({
      buttonsStyling: false,
      customClass: 'modal-content',
      confirmButtonClass: 'btn btn-primary',
      cancelButtonClass: 'btn'
  })
  ],
  
  providers: [
    ProductService,
    StockService,
    MainService,
    FoodService,
    CheckService,
    MemberService,
    UserService,
    MonthService,
    AccService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { 
  
}

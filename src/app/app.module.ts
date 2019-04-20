import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

import { ProductService } from "./services/product.service"



const routes: Routes = [
  { path: '', redirectTo: '/bg', pathMatch: 'full' },
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
    ProductService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

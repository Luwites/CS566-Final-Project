import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import { MainComponent } from './main.component';
import { LoginComponent } from './login.component';
import { ShippingComponent } from './pies-module/shipping.component';
import { AboutComponent } from './about.component';
import { ContactUsComponent } from './contact-us.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MainComponent,
    LoginComponent,
    AboutComponent,
    ContactUsComponent
    // ShippingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatTabsModule,
    RouterModule.forRoot([
      {path:'', component:MainComponent},
    //  {path:'home', component:HomeComponent},
     {path:':id', loadChildren:()=>import('./pies-module/pies-module.module').then(m=>m.PiesModuleModule)}
      //loadChildren:()=>import('./users-module/users-module.module').then(m=>m.UsersModuleModule)
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

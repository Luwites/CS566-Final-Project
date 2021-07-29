import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { ShippingComponent } from './shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { SuccessShipmentComponent } from './success-shipment.component';
import { FailureShipmentComponent } from './failure-shipment.component';
import {MatGridListModule} from '@angular/material/grid-list';




@NgModule({
  declarations: [
    DetailsComponent,
    ShippingComponent,
    SuccessShipmentComponent,
    FailureShipmentComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatGridListModule,
    RouterModule.forChild([
      {path:'success', component:SuccessShipmentComponent},
      {path:'', component:DetailsComponent},
      {path:'shipping_details', component:ShippingComponent},     
      {path:'failure', component:FailureShipmentComponent},
      
    ])
  ]
})
export class PiesModuleModule { }

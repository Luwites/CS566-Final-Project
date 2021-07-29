import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormControl,FormGroupDirective,NgForm,Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { PieService } from '../pie.service';
import {ErrorStateMatcher} from '@angular/material/core';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styles: [
  ]
})

export class ShippingComponent implements OnInit {
  piedataNew: any
  states: any[] = [
    {value: 'AL', viewValue: 'AL'},
    {value: 'AK', viewValue: 'AK'},
    {value: 'AZ', viewValue: 'AZ'},
    {value: 'AR', viewValue: 'AR'},
    {value: 'CA', viewValue: 'CA'},
    {value: 'CO', viewValue: 'CO'},
    {value: 'CT', viewValue: 'CT'},
    {value: 'DE', viewValue: 'DE'},
    {value: 'FL', viewValue: 'FL'},
    {value: 'GA', viewValue: 'GA'},
    {value: 'ID', viewValue: 'ID'},
    {value: 'IL', viewValue: 'IL'},
    {value: 'IN', viewValue: 'IN'},
    {value: 'IA', viewValue: 'IA'},
    {value: 'KS', viewValue: 'KS'},
    {value: 'KY', viewValue: 'KY'},
    {value: 'LA', viewValue: 'LA'},
    {value: 'MD', viewValue: 'MD'},
    {value: 'TX', viewValue: 'TX'}
  ];
  constructor(private fb:FormBuilder, private router: Router, private service: PieService) { 
    if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation()!.extras.state && this.router.getCurrentNavigation()!.extras.state!.toBeOrdered) {
        this.piedataNew = this.router.getCurrentNavigation()!.extras!.state
        console.log(this.piedataNew.toBeOrdered._id)
    }
  }
  myobj = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    address1: ['', Validators.required],
    address2: [''],
    zipcode: ['', Validators.required],
    city: ['', Validators.required],
    state: ['', Validators.required]
  })

  ngOnInit(): void {
  }
  saveShippingDetails(){
    this.service.submitAddressForShipment(this.myobj.value).subscribe((data:any) => {
      console.log(data)
      if(data.status === "SUCCESS"){
        this.router.navigate(['/' ,'shipping_details', 'success'], {state:{orderedPieData:this.piedataNew.toBeOrdered, orderData:data}})
      } else{
        this.router.navigate(['/', 'shipping_details', 'failure'])
      }
      
    })
  
  }
  getUrl(){
    return "url('https://www.rd.com/wp-content/uploads/2018/07/shutterstock_1011990919.jpg?resize=700,466')"
  }
  
}



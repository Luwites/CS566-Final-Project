import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieService } from '../pie.service';

@Component({
  selector: 'app-success-shipment',
  templateUrl: './success-shipment.component.html',
  styles: [
  ]
})
export class SuccessShipmentComponent{
orderedPie: any
orderDetails: any
shipping_label: string =''
tracking_number: any
url_provider: string =''
  constructor( private router: Router, private service: PieService) { 
    if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation()!.extras.state && this.router.getCurrentNavigation()!.extras.state!.orderData) {
        this.orderedPie = this.router.getCurrentNavigation()!.extras!.state
        console.log(this.orderedPie.orderData.label_url)
        console.log(this.orderedPie.orderData.tracking_url_provider)
        console.log(this.orderedPie.orderData.tracking_number)
        this.shipping_label = this.orderedPie.orderData.label_url
        this.tracking_number = this.orderedPie.orderData.tracking_number
        this.url_provider = this.orderedPie.orderData.tracking_url_provider
    }
  }
  getUrl(){
    return "url('https://image.shutterstock.com/image-photo/youre-all-set-text-written-260nw-1897525360.jpg')";
  }
}

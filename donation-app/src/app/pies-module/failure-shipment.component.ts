import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-failure-shipment',
  templateUrl: './failure-shipment.html',
  styles: [
  ]
})
export class FailureShipmentComponent  {

  constructor() { }

  getUrl()
  {
    return "url('https://i.etsystatic.com/6751299/r/il/113133/1209787229/il_1140xN.1209787229_od0v.jpg')";
  }

}

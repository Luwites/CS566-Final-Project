import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styles: [
  ]
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  getUrl()
  {
    return "url('https://i.etsystatic.com/6751299/r/il/113133/1209787229/il_1140xN.1209787229_od0v.jpg')";
  }
}

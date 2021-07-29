import { Component } from '@angular/core';
import { PieService } from './pie.service';


@Component({
  selector: 'app-root',
  
  templateUrl: './app.component.html'
  
})
export class AppComponent {
  id:any = false
  shipping:any= false
  title = 'donation-app';
  constructor(private service: PieService){
 this.id = this.service.getId()
 console.log(this.id)
  }
  ngOnInit(){
    console.log(this.id)
  }
}

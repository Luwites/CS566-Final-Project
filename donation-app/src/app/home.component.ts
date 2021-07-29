import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieService } from './pie.service';

@Component({
  selector: 'app-home',
   templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {
// temp: any = true
// m:any
pieList: any = []
  constructor(private service: PieService, private router: Router) { 
    // this.temp = this.service.gettoggler()
  }

  ngOnInit(): void {
    this.service.getAllPiesUpForDonation().subscribe((data:any)=>{
      console.log(data.result);
      this.pieList = data.result
      // this.temp = this.service.gettoggler()
    })
    
  }
  getUrl()
  {
    return "url('https://img.freepik.com/free-vector/pink-marble-background-light-elegant-template_87408-118.jpg?size=626&ext=jpg')";
  }
  pie(){
    console.log('123')
//     for(let pie of this.pieList){
//  this.m = pie._id
//     }
// this.router.navigate(['/', 'pielist', id])
  }
}

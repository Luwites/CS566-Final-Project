import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieService } from './pie.service';

@Component({
  selector: 'app-home',
   templateUrl: './home.component.html' 
})
export class HomeComponent implements OnInit {
pieList: any = []
  constructor(private service: PieService, private router: Router) { 
  }

  ngOnInit(): void {
    this.service.getAllPiesUpForDonation().subscribe((data:any)=>{
      console.log(data.result);
      this.pieList = data.result
    })
    
  }
  getUrl()
  {
    return "url('https://img.freepik.com/free-vector/pink-marble-background-light-elegant-template_87408-118.jpg?size=626&ext=jpg')";
  }
}

import { CompilePipeMetadata } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PieService } from '../pie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styles: [
  ]
})
export class DetailsComponent {
  // temp:any = false
  pieId: any 
pieData:any={}
  constructor(private service: PieService, private router: Router) {
    if (this.router.getCurrentNavigation() && this.router.getCurrentNavigation()!.extras.state && this.router.getCurrentNavigation()!.extras.state!.data) {
      this.pieData = this.router.getCurrentNavigation()!.extras!.state
   console.log(this.pieData.data._id)
    this.pieId = this.pieData.data._id
    this.service.setId(this.pieData.data._id)
    }
  }
  ngOnInit(): void {
//     this.service.getPieDetailsById(this.pieData.data._id).subscribe(data => {
//  console.log(data)
    //})
   
    
  }
  getUrl()
  {
    return "url('https://img.freepik.com/free-vector/pink-marble-background-light-elegant-template_87408-118.jpg?size=626&ext=jpg')";
  }
}

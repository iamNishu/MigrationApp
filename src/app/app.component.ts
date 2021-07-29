import { Component, ElementRef, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RejectedFile } from 'ngx-dropzone/lib/ngx-dropzone.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tryme-app';
  constructor(private router:Router){

  }
 btnClick(){
   this.router.navigateByUrl('/Input')
 }

}



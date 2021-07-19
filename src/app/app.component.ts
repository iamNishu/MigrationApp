import { Component, ElementRef, Input } from '@angular/core';
import { RejectedFile } from 'ngx-dropzone/lib/ngx-dropzone.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tryme-app';
  files: File[] = [];
  rejectedFiles: RejectedFile[] = [];
  toUpload: any;
  isHovering?: boolean;
  isHoverings?: boolean;
  f!: File;
  color: string = '';
  nd: string = '';
  bg: string = '';
  notAllowed: boolean = false;

  /* toggleHover(event: boolean) {

    if (this.rejectedFiles.length > 0) {
      this.isHoverings = event;

    }
    else {
      this.isHovering = event;
    }
  }
 */
  /*  dragStart(event:any) {
    event.dataTransfer.setData("File", event.target.id);
  } */

  /*   dragOverHandler(event:any){
      event.preventDefault();
       if(event.rejectedFiles.length>0){
         this.nd='not-allowed'
       }
       else{
         this.nd=''
       }
   
      } */

  /* 	onSelect(event:any) {
  
      console.log(event);
      if(this.files && this.files.length >=2) {
        this.onRemove(this.files[0]);
      }
      this.files.push(...event.addedFiles);
      this.toUpload=event;
      //this.files.push(event)
      console.log(event);
      
      if(event.rejectedFiles.length > 0){
     
      }
    }
  	
     */


    //on dropping the event
  onSelect(event: any) {
    if (event.rejectedFiles.length > 0) {
      this.color = 'red';
      this.nd = 'not-allowed';
      console.log(this.color);
      this.notAllowed = true;
      this.bg = ''
    }
    else {
      this.color = 'green';
      this.bg = 'lightgrey'
      this.notAllowed = false;
      console.log(this.color);
      if (this.files && this.files.length >= 1) {
        this.onRemove(this.files[0]);
        this.nd = '';


      }
      else {
        this.files.push(...event.addedFiles);
      }

    }
  }


  //Removes the files fromthe dropzone.
  onRemove(event: File) {

    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);

  }




}



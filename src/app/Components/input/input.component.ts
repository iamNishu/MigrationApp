
import { Component, ElementRef, Input } from '@angular/core';
import { RejectedFile } from 'ngx-dropzone/lib/ngx-dropzone.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent  {

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
  ngclass: string ='custom-dropzone'
  
   //on dropping the event
   onSelect(event: any) {
    if (event.rejectedFiles.length > 0) {
      this.color = 'red';
      this.nd = "url('../assets/stop.png'),auto"
      console.log(this.color);
      this.notAllowed = true;
      this.bg = '#F0F8FF'
      this.ngclass ="custom-dropzone1"
    }
    else {
      this.color = '#184685';
      this.bg = '#F0F8FF'
      this.notAllowed = false;
      console.log(this.color);
      this.nd = "url('../assets/allowed.png'),auto"
      this.ngclass ="custom-dropzone2"
      if (this.files && this.files.length >= 1) {
        this.onRemove(this.files[0]);
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

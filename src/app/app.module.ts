import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { InputComponent } from './Components/input/input.component';
import {PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';
import { HomeComponent } from './Components/home/home.component';

 
const appRoutes: Routes = [
  {path: '', redirectTo: 'home' , pathMatch: 'full'}, 
  {path: 'home', component: HomeComponent}, 
  {path: 'Input', component: InputComponent},
  { path: '**', component: PageNotFoundComponent }
  
]
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    PageNotFoundComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    NgxDropzoneModule,
    RouterModule.forRoot(appRoutes, {enableTracing: true})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

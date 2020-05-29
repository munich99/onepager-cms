import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyContent01Component } from './main/my-content01/my-content01.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [   
   { path:'upload', component: UploadComponent },
  
 ];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MyContent01Component,
      UploadComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      ReactiveFormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

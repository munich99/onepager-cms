import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyContent01Component } from './main/my-content01/my-content01.component';
import { MyContent02Component } from './main/my-content02/my-content02.component';
import { UploadComponent } from './upload/upload.component';
import { MyStartComponent } from './main/my-start/my-start.component';
import { MyEditComponent } from './admin/my-edit/my-edit.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [   
   { path:'upload', component: UploadComponent },
   { path:'login', component: LoginComponent },
   { path:'admin', component: AdminComponent },
   { path:'aboutme', component: MyContent01Component },
   { path:'', component: MyStartComponent },
  
 ];

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MyContent01Component,
      MyContent02Component,
      UploadComponent,
      MyStartComponent,
      MyEditComponent,
      AdminComponent,
      LoginComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

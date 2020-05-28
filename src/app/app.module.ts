import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MyContent01Component } from './main/my-content01/my-content01.component';

@NgModule({
   declarations: [
      AppComponent,
      HeaderComponent,
      FooterComponent,
      MyContent01Component
   ],
   imports: [
      BrowserModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }

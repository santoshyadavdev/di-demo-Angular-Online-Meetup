import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CONFIG_TOKEN, CONFIG_VALUE } from './token/config.token';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{
    provide : CONFIG_TOKEN, useValue : CONFIG_VALUE
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

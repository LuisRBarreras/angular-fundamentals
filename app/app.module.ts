import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { PassengerDahboardModule }  from './passenger-dashboard/passenger-dashboard.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    //angular modules
    BrowserModule,
    CommonModule,

    //custom modules
    PassengerDahboardModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

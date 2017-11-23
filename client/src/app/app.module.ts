import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
		AppRoutingModule,

		MatToolbarModule,
		MatButtonModule,
		MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

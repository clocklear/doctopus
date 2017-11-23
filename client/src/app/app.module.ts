import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import {
	MatToolbarModule,
	MatButtonModule,
	MatIconModule,
	MatSidenavModule,
	MatListModule
} from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,

		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
		MatSidenavModule,
		MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

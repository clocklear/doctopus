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

import { ScanModule } from './scan/scan.module';
import { FindModule } from './find/find.module';

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
		MatListModule,

		ScanModule,
		FindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScanRoutingModule } from './scan-routing.module';
import { ScanComponent } from './scan.component';

@NgModule({
  imports: [
    CommonModule,
    ScanRoutingModule
  ],
  declarations: [ScanComponent]
})
export class ScanModule { }

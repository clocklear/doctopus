import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FindRoutingModule } from './find-routing.module';
import { FindComponent } from './find.component';

@NgModule({
  imports: [
    CommonModule,
    FindRoutingModule
  ],
  declarations: [FindComponent]
})
export class FindModule { }

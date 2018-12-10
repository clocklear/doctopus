import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindComponent } from './find.component';

const routes: Routes = [
	{ path: 'find', component: FindComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FindRoutingModule { }

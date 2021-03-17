import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { FrontComponent } from './front/front.component';
const routes: Routes = [
  {
    path:"course", component:CourseinfoComponent
  },
  {
    path:"", component:FrontComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

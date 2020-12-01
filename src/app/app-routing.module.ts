import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {TodoViewComponent} from './todo-view/todo-view.component';

const routes: Routes = [
  {path:'',component:TodoViewComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

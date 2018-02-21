import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFormComponent } from './components/parent-form/parent-form.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ParentFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ManageCompaniesComponent } from './manage-companies/manage-companies.component';

const routes: Routes = [
  {
    path: 'manageCompanies',
    component: ManageCompaniesComponent
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

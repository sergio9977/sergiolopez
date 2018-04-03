import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankListComponent } from './bank/bank-list/bank-list.component';
import { BankAddComponent } from './bank/bank-add/bank-add.component';
import { BankEditComponent } from './bank/bank-edit/bank-edit.component';

const routes: Routes = [
  {
    path: 'clients',
    component : BankListComponent
  },
  {
    path: 'add',
    component : BankAddComponent
  },
  {
    path: 'edit/:id',
    component : BankEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

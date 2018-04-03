import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BankListComponent } from './bank-list/bank-list.component';
import { BankEditComponent } from './bank-edit/bank-edit.component';
import { BankAddComponent } from './bank-add/bank-add.component';
import { BankService } from './shared/services/bank.service';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [BankListComponent, BankEditComponent, BankAddComponent],
  providers: [BankService]
})
export class BankModule { }

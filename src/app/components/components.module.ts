import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { FormComponent } from './form/form.component';
import { FormInputComponent } from './form-input/form-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KPICardComponent } from './kpicard/kpicard.component';
import { PopupComponent } from './popup/popup.component';



@NgModule({
  declarations: [
    TableComponent,
    NavbarComponent,
    FormComponent,
    FormInputComponent,
    KPICardComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    TableComponent,
    NavbarComponent,
    FormComponent,
    FormInputComponent,
    PopupComponent
  ]
})
export class ComponentsModule { }

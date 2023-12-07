import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { KPICardComponent } from './kpicard/kpicard.component';



@NgModule({
  declarations: [
    TableComponent,
    NavbarComponent,
    KPICardComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TableComponent,
    NavbarComponent
  ]
})
export class ComponentsModule { }

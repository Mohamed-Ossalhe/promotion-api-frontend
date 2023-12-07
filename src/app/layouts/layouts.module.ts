import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { LayoutsRoutingModule } from './layouts-routing.module';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    ComponentsModule
  ]
})
export class LayoutsModule { }

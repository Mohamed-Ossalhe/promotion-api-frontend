import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    StatisticsComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../components/components.module';
import { HomeComponent } from './home/home.component';
import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './auth/login/login.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
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

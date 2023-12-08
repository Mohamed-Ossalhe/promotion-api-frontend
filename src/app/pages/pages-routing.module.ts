import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './auth/login/login.component';
import {DashboardComponent} from "./dashboard/dashboard.component";

const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "login",
        component: LoginComponent
    },
    { 
        path: "dashboard",
        component: DashboardComponent 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule { }

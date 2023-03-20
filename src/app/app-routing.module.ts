import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { ReportAddComponent } from './components/reports/report-add/report-add.component';
import { AdminComponent } from './components/admin/admin.component';
import { LaborantDetailComponent } from './components/admin/laborant-detail/laborant-detail.component';
import { UnconfirmedLsComponent } from './components/admin/unconfirmed-ls/unconfirmed-ls.component';

const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'register',component:RegisterComponent},
{path:'report',component:ReportsComponent},
{path:'report',children:[
{path:'details',component: ReportDetailsComponent},
{path:'addReport',component: ReportAddComponent}]},
{path:'admin',component:AdminComponent},
{path:'admin',children:[
{path:'detail',component:LaborantDetailComponent},
{path:'unconfirmed',component:UnconfirmedLsComponent}]}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

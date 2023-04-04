import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { ReportAddComponent } from './components/reports/report-add/report-add.component';
import { AdminComponent } from './components/admin/admin.component';
import { LaborantDetailComponent } from './components/admin/laborant-detail/laborant-detail.component';
import { UnconfirmedLsComponent } from './components/admin/unconfirmed-ls/unconfirmed-ls.component';
import { PatientComponent } from './components/patient/patient.component';
import { ErrorComponent } from './components/error/error.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'signup',component: SignupComponent},
{path:'report',component:ReportsComponent},
{path:'report',children:[
{path:'details',component: ReportDetailsComponent},
{path:'addReport',component: ReportAddComponent}]},
{path:'admin',component:AdminComponent},
{path:'admin',children:[
{path:'detail',component:LaborantDetailComponent},
{path:'unconfirmed',component:UnconfirmedLsComponent}]},
{path:'patient',component:PatientComponent},
{path:'**',component:ErrorComponent}
 ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

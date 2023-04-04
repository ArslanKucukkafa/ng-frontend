import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { ReportAddComponent } from './components/reports/report-add/report-add.component';
import { AdminComponent } from './components/admin/admin.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LaborantDetailComponent } from './components/admin/laborant-detail/laborant-detail.component';
import { UnconfirmedLsComponent } from './components/admin/unconfirmed-ls/unconfirmed-ls.component';
import { PatientComponent } from './components/patient/patient.component';
import { SignupComponent } from './components/signup/signup.component';
import { ErrorComponent } from './components/error/error.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportsComponent,
    ReportDetailsComponent,
    ReportAddComponent,
    AdminComponent,
    LaborantDetailComponent,
    UnconfirmedLsComponent,
    PatientComponent,
    SignupComponent,
    ErrorComponent,
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

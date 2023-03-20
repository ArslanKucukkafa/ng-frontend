import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ReportDetailsComponent } from './components/reports/report-details/report-details.component';
import { ReportAddComponent } from './components/reports/report-add/report-add.component';
import { AdminComponent } from './components/admin/admin.component';
import { LaborantDetailComponent } from './components/admin/laborant-detail/laborant-detail.component';
import { UnconfirmedLsComponent } from './components/admin/unconfirmed-ls/unconfirmed-ls.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ReportsComponent,
    ReportDetailsComponent,
    ReportAddComponent,
    AdminComponent,
    LaborantDetailComponent,
    UnconfirmedLsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

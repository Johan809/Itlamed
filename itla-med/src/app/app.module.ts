import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { PatientsComponent } from './components/patients/patients.component';
import { PatientComponent } from './components/patient/patient.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';
import { DateReportComponent } from './components/date-report/date-report.component';
import { ZodReportComponent } from './components/zod-report/zod-report.component';
import { CantReportComponent } from './components/cant-report/cant-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    PatientsComponent,
    PatientComponent,
    LoginComponent,
    RegisterComponent,
    NewPatientComponent,
    EditPatientComponent,
    DateReportComponent,
    ZodReportComponent,
    CantReportComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

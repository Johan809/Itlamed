import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import { PatientsComponent } from './components/Patients-Components/patients/patients.component';
import { PatientComponent } from './components/Patients-Components/patient/patient.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { NewPatientComponent } from './components/Patients-Components/new-patient/new-patient.component';
import { EditPatientComponent } from './components/Patients-Components/edit-patient/edit-patient.component';
import { DateReportComponent } from './components/Reports-Components/date-report/date-report.component';
import { ZodReportComponent } from './components/Reports-Components/zod-report/zod-report.component';
import { CantReportComponent } from './components/Reports-Components/cant-report/cant-report.component';
import { LobbyComponent } from './components/lobby/lobby.component';

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
    LobbyComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

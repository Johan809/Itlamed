import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { Error404Component } from './components/error404/error404.component';
import { AboutComponent } from './components/about/about.component';

import { PatientComponent } from './components/Patients-Components/patient/patient.component';
import { PatientsComponent } from './components/Patients-Components/patients/patients.component';
import { NewPatientComponent } from './components/Patients-Components/new-patient/new-patient.component';
import { EditPatientComponent } from './components/Patients-Components/edit-patient/edit-patient.component';

import { ConsultComponent } from './components/Consults-Components/consult/consult.component';
import { ConsultsComponent } from './components/Consults-Components/consults/consults.component';
import { NewConsultComponent } from './components/Consults-Components/new-consult/new-consult.component';
import { EditConsultComponent } from './components/Consults-Components/edit-consult/edit-consult.component';

import { CantReportComponent } from './components/Reports-Components/cant-report/cant-report.component';
import { DateReportComponent } from './components/Reports-Components/date-report/date-report.component';
import { ZodReportComponent } from './components/Reports-Components/zod-report/zod-report.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'lobby',
    component: LobbyComponent,
  },
  {
    path: 'patients/:id',
    component: PatientComponent,
  },
  {
    path: 'patients',
    component: PatientsComponent,
  },
  {
    path: 'newPatient',
    component: NewPatientComponent,
  },
  {
    path: 'editPatient/:id',
    component: EditPatientComponent,
  },
  {
    path: 'consults/:id',
    component: ConsultComponent,
  },
  {
    path: 'consults',
    component: ConsultsComponent,
  },
  {
    path: 'newConsult',
    component: NewConsultComponent,
  },
  {
    path: 'editConsult/:id',
    component: EditConsultComponent,
  },
  {
    path: 'reports/date',
    component: DateReportComponent,
  },
  {
    path: 'reports/zod',
    component: ZodReportComponent,
  },
  {
    path: 'reports/cant',
    component: CantReportComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

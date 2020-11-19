import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantReportComponent } from './components/Reports-Components/cant-report/cant-report.component';
import { DateReportComponent } from './components/Reports-Components/date-report/date-report.component';
import { EditPatientComponent } from './components/Patients-Components/edit-patient/edit-patient.component';
import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewPatientComponent } from './components/Patients-Components/new-patient/new-patient.component';
import { PatientComponent } from './components/Patients-Components/patient/patient.component';
import { PatientsComponent } from './components/Patients-Components/patients/patients.component';
import { RegisterComponent } from './components/register/register.component';
import { ZodReportComponent } from './components/Reports-Components/zod-report/zod-report.component';
import { LobbyComponent } from './components/lobby/lobby.component';

const routes: Routes = [
  //agregar las demas rutas encima de la de error404
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
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

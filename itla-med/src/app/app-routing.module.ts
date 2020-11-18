import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPatientComponent } from './components/edit-patient/edit-patient.component';

import { Error404Component } from './components/error404/error404.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NewPatientComponent } from './components/new-patient/new-patient.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientsComponent } from './components/patients/patients.component';
import { RegisterComponent } from './components/register/register.component';

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
    path: '**',
    component: Error404Component,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

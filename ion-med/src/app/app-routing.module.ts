import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "home",
    loadChildren: () =>
      import("./home/home.module").then((m) => m.HomePageModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "login",
    loadChildren: () =>
      import("./pages/login/login.module").then((m) => m.LoginPageModule),
  },
  {
    path: "register",
    loadChildren: () =>
      import("./pages/register/register.module").then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: "lobby",
    loadChildren: () =>
      import("./pages/lobby/lobby.module").then((m) => m.LobbyPageModule),
  },
  {
    path: "reports/date",
    loadChildren: () =>
      import("./pages/Reports-Pages/date-report/date-report.module").then(
        (m) => m.DateReportPageModule
      ),
  },
  {
    path: "reports/zod",
    loadChildren: () =>
      import("./pages/Reports-Pages/zod-report/zod-report.module").then(
        (m) => m.ZodReportPageModule
      ),
  },
  {
    path: "reports/cant",
    loadChildren: () =>
      import("./pages/Reports-Pages/cant-report/cant-report.module").then(
        (m) => m.CantReportPageModule
      ),
  },
  {
    path: "consults/new",
    loadChildren: () =>
      import("./pages/Consults-Pages/new-consult/new-consult.module").then(
        (m) => m.NewConsultPageModule
      ),
  },
  {
    path: "consults",
    loadChildren: () =>
      import("./pages/Consults-Pages/consults/consults.module").then(
        (m) => m.ConsultsPageModule
      ),
  },
  {
    path: "patients/new",
    loadChildren: () =>
      import("./pages/Patients-Pages/new-patient/new-patient.module").then(
        (m) => m.NewPatientPageModule
      ),
  },
  {
    path: "patients",
    loadChildren: () =>
      import("./pages/Patients-Pages/patients/patients.module").then(
        (m) => m.PatientsPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

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
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

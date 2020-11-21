import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ZodReportPage } from './zod-report.page';

const routes: Routes = [
  {
    path: '',
    component: ZodReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ZodReportPageRoutingModule {}

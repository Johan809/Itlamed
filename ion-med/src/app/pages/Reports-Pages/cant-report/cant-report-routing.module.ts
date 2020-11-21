import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CantReportPage } from './cant-report.page';

const routes: Routes = [
  {
    path: '',
    component: CantReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CantReportPageRoutingModule {}

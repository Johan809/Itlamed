import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DateReportPage } from './date-report.page';

const routes: Routes = [
  {
    path: '',
    component: DateReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DateReportPageRoutingModule {}

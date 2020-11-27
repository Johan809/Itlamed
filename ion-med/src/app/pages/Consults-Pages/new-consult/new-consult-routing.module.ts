import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewConsultPage } from './new-consult.page';

const routes: Routes = [
  {
    path: '',
    component: NewConsultPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewConsultPageRoutingModule {}

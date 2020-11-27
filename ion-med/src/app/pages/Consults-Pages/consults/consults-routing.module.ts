import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultsPage } from './consults.page';

const routes: Routes = [
  {
    path: '',
    component: ConsultsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultsPageRoutingModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CantReportPageRoutingModule } from './cant-report-routing.module';

import { CantReportPage } from './cant-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CantReportPageRoutingModule
  ],
  declarations: [CantReportPage]
})
export class CantReportPageModule {}

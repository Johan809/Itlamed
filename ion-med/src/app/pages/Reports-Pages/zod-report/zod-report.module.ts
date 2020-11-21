import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ZodReportPageRoutingModule } from './zod-report-routing.module';

import { ZodReportPage } from './zod-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ZodReportPageRoutingModule
  ],
  declarations: [ZodReportPage]
})
export class ZodReportPageModule {}

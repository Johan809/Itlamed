import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateReportPageRoutingModule } from './date-report-routing.module';

import { DateReportPage } from './date-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateReportPageRoutingModule
  ],
  declarations: [DateReportPage]
})
export class DateReportPageModule {}

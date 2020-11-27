import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewConsultPageRoutingModule } from './new-consult-routing.module';

import { NewConsultPage } from './new-consult.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewConsultPageRoutingModule
  ],
  declarations: [NewConsultPage]
})
export class NewConsultPageModule {}

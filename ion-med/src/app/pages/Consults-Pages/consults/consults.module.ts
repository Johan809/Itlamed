import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConsultsPageRoutingModule } from './consults-routing.module';

import { ConsultsPage } from './consults.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConsultsPageRoutingModule
  ],
  declarations: [ConsultsPage]
})
export class ConsultsPageModule {}

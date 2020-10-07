import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CpuPageRoutingModule } from './cpu-routing.module';

import { CpuPage } from './cpu.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    CpuPageRoutingModule
  ],
  declarations: [CpuPage]
})
export class CpuPageModule {}

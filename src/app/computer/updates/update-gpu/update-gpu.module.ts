import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateGpuPageRoutingModule } from './update-gpu-routing.module';

import { UpdateGpuPage } from './update-gpu.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateGpuPageRoutingModule
  ],
  declarations: [UpdateGpuPage]
})
export class UpdateGpuPageModule {}

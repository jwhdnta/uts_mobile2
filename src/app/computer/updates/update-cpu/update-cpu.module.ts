import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateCPUPageRoutingModule } from './update-cpu-routing.module';

import { UpdateCPUPage } from './update-cpu.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateCPUPageRoutingModule
  ],
  declarations: [UpdateCPUPage]
})
export class UpdateCPUPageModule {}

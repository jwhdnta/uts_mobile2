import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateRAMPageRoutingModule } from './update-ram-routing.module';

import { UpdateRAMPage } from './update-ram.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateRAMPageRoutingModule
  ],
  declarations: [UpdateRAMPage]
})
export class UpdateRAMPageModule {}

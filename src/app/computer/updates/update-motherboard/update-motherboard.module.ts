import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UpdateMotherboardPageRoutingModule } from './update-motherboard-routing.module';

import { UpdateMotherboardPage } from './update-motherboard.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    IonicModule,
    UpdateMotherboardPageRoutingModule
  ],
  declarations: [UpdateMotherboardPage]
})
export class UpdateMotherboardPageModule {}

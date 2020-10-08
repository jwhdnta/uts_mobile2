import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateMotherboardPage } from './update-motherboard.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateMotherboardPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateMotherboardPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateGpuPage } from './update-gpu.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateGpuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateGpuPageRoutingModule {}

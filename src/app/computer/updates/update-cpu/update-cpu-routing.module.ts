import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UpdateCPUPage } from './update-cpu.page';

const routes: Routes = [
  {
    path: '',
    component: UpdateCPUPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UpdateCPUPageRoutingModule {}

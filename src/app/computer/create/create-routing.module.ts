import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreatePage } from './create.page';

const routes: Routes = [
  {
    path: '',
    component: CreatePage
  },
  {
    path: 'motherboard/:id',
    loadChildren: () => import('./motherboard/motherboard.module').then( m => m.MotherboardPageModule)
  },
  {
    path: 'cpu/:id',
    loadChildren: () => import('./cpu/cpu.module').then( m => m.CpuPageModule)
  },
  {
    path: 'ram/:id',
    loadChildren: () => import('./ram/ram.module').then( m => m.RamPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreatePageRoutingModule {}

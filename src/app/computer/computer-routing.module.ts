import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComputerPage } from './computer.page';

const routes: Routes = [
  {
    path: '',
    component: ComputerPage
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: ':id',
    loadChildren: () => import('./details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'update-GPU/:id',
    loadChildren: () => import('./updates/update-gpu/update-gpu.module').then( m => m.UpdateGpuPageModule)
  },
  {
    path: 'update-CPU/:id',
    loadChildren: () => import('./updates/update-cpu/update-cpu.module').then( m => m.UpdateCPUPageModule)
  },
  {
    path: 'update-Ram/:id',
    loadChildren: () => import('./updates/update-ram/update-ram.module').then( m => m.UpdateRAMPageModule)
  },
  {
    path: 'update-Motherboard/:id',
    loadChildren: () => import('./updates/update-motherboard/update-motherboard.module').then( m => m.UpdateMotherboardPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputerPageRoutingModule {}

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComputerPageRoutingModule {}

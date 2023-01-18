import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosPage } from './funcionarios.page';

const routes: Routes = [
  {
    path: '',
    component: FuncionariosPage,
    children: [
      {
        path: 'funcionario',
        children: [
          {
            path: '',
            loadChildren: () => import('../funcionarios/funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
          },
        ],
      },
    ],
  },
];

/*const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        children: [
          {
            path: '',
            loadChildren: () => import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
          },
        ],
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];*/

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosPageRoutingModule {}

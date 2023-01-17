import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: 'inicio',
    component: InicioPage
  },
  {
    path: 'administracao',
    loadChildren: () => import('../administracao/administracao.module').then( m => m.AdministracaoPageModule)
  },
  {
    path: 'manutencao',
    loadChildren: () => import('../manutencao/manutencao.module').then( m => m.ManutencaoPageModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('../funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}

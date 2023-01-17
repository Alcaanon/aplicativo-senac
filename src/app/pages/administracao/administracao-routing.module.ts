import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministracaoPage } from './administracao.page';

const routes: Routes = [
  {
    path: 'administracao',
    component: AdministracaoPage    
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
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
export class AdministracaoPageRoutingModule {}

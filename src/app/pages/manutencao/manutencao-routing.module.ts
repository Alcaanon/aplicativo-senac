import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManutencaoPage } from './manutencao.page';

const routes: Routes = [
  {
    path: 'manutencao',
    component: ManutencaoPage
  },
  {
    path: 'inicio',
    loadChildren: () => import('../inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'administracao',
    loadChildren: () => import('../administracao/administracao.module').then( m => m.AdministracaoPageModule)
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
export class ManutencaoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FuncionariosPage } from './funcionarios.page';

const routes: Routes = [
  {
    path: 'funcionarios',
    component: FuncionariosPage
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
    path: 'manutencao',
    loadChildren: () => import('../manutencao/manutencao.module').then( m => m.ManutencaoPageModule)
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FuncionariosPageRoutingModule {}

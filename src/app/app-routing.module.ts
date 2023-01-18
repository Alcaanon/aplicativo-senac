import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'administracao',
    loadChildren: () => import('./pages/administracao/administracao.module').then( m => m.AdministracaoPageModule)
  },
  {
    path: 'manutencao',
    loadChildren: () => import('./pages/manutencao/manutencao.module').then( m => m.ManutencaoPageModule)
  },
  {
    path: 'funcionarios',
    loadChildren: () => import('./pages/funcionarios/funcionarios.module').then( m => m.FuncionariosPageModule)
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./pages/funcionarios/cadastro/cadastro.module').then( m => m.CadastroPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./pages/funcionarios/funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    //redirectTo: 'home',
    redirectTo: 'home',
    pathMatch: 'full'
  },
 {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
 {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  {
    path: 'segunda',
    loadChildren: './segunda/home.module#HomePageModule'
  },
  {
    path: 'terca',
    loadChildren: './terca/home.module#HomePageModule'
  },
  {
    path: 'quarta',
    loadChildren: './quarta/home.module#HomePageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

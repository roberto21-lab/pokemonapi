import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'types',
    loadChildren: () => import('./types/types.module').then( m => m.TypesPageModule)
  },

  {
    path: 'card', 
    loadChildren: () => import('./card/card.module').then( m => m.CardModule)
  },

  {
    path: 'card', component: CardComponent
  },
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

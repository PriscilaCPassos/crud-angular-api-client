import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';

export const routes: Routes = [

  { path:'', component: HomeComponent},

 /* { path:'cadastrar', component: ClientFormComponent},

  { path:'listar', component: ClientListComponent},

 */


  {
    path: 'listar',
    loadComponent: () => import('./client-list/client-list.component')
  },

  {
    path: 'cadastrar',
    loadComponent: () => import('./client-form/client-form.component')
  },

  {
    path: ':id/edit',
    loadComponent: () => import('./client-form/client-form.component')
  }


];

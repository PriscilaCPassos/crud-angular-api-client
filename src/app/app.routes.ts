import { Routes } from '@angular/router';
import { HomeComponent } from './_components/home/home.component';
import ClientListComponent from './client-list/client-list.component';
import ClientFormComponent from './client-form/client-form.component';

export const routes: Routes = [

  { path:'', component: HomeComponent},

  {
    path: 'listar', component: ClientListComponent
  },

  {
    path: 'cadastrar', component: ClientFormComponent
  },

  {
    path: 'listar/:id/edit',
    loadComponent: () => import('./client-form/client-form.component')
  }


];

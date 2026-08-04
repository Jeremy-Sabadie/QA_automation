import { Routes } from '@angular/router';

import { ClientsComponent } from './pages/clients/clients.component';
import { ClientFormComponent } from './pages/clients/client-form/client-form.component';

export const routes: Routes = [
  {
    path: 'clients',
    component: ClientsComponent,
  },

  {
    path: 'clients/new',
    component: ClientFormComponent,
  },

  {
    path: 'clients/edit/:id',
    component: ClientFormComponent,
  },

  {
    path: '',
    redirectTo: 'clients',
    pathMatch: 'full',
  },

  {
    path: '**',
    redirectTo: 'clients',
  },
];

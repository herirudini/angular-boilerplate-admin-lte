import { Routes } from '@angular/router';
import { MainLayout } from './shared/layout/main-layout/main-layout';

export const routes: Routes = [
    {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        loadComponent: () => import('./pages/dashboard-v2/dashboard-v2').then(c => c.DashboardV2)
      },
    ]
  },
];

import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './layout/auth-layout/login/login';
import { Register } from './layout/auth-layout/register/register';
import { PageNotFound } from './layout/error-layout/page-not-found/page-not-found';
import { Menus } from './types/constants/menus';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            redirectTo: Menus['DASHBOARD'].children?.['DASHBOARD_V1'].url,
            pathMatch: 'full',
          },
          {
            path: Menus['DASHBOARD'].children?.['DASHBOARD_V1'].url,
            canActivate: [],
            loadComponent: () => import('./pages/dashboard-v1/dashboard-v1').then(c => c.DashboardV1)
          },
          {
            path: Menus['DASHBOARD'].children?.['DASHBOARD_V2'].url,
            canActivate: [],
            loadComponent: () => import('./pages/dashboard-v2/dashboard-v2').then(c => c.DashboardV2)
          },
          {
            path: Menus['DASHBOARD'].children?.['DASHBOARD_V3'].url,
            canActivate: [],
            loadComponent: () => import('./pages/dashboard-v3/dashboard-v3').then(c => c.DashboardV3)
          },
        ]
      },
    ]
  },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'error/404', component: PageNotFound },
  { path: '**', redirectTo: 'error/404' },
];

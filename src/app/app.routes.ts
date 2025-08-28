import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout';
import { Login } from './layout/auth-layout/login/login';
import { Register } from './layout/auth-layout/register/register';
import { PageNotFound } from './layout/error-layout/page-not-found/page-not-found';
import { Menus } from './types/constants/menus';

export const routes: Routes = [
  {
    path: '',
    redirectTo: Menus['DASHBOARD'].url,
    pathMatch: 'full'
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: Menus['DASHBOARD'].url,
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
      {
        path: Menus['FORMS'].url,
        children: [
          {
            path: '',
            redirectTo: Menus['FORMS'].children?.['GENERAL'].url,
            pathMatch: 'full',
          },
          {
            path: Menus['FORMS'].children?.['GENERAL'].url,
            canActivate: [],
            loadComponent: () => import('./pages/forms/general-elements/general-elements').then(c => c.GeneralElements)
          },
        ]
      },
      {
        path: Menus['TABLES'].url,
        children: [
          {
            path: '',
            redirectTo: Menus['TABLES'].children?.['SIMPLE'].url,
            pathMatch: 'full',
          },
          {
            path: Menus['TABLES'].children?.['SIMPLE'].url,
            canActivate: [],
            loadComponent: () => import('./pages/tables/tables-simple/tables-simple').then(c => c.TablesSimple)
          },
        ]
      }
    ]
  },
  { path: 'login', component: Login },
  { path: 'register', component: Register },
  { path: 'error/404', component: PageNotFound },
  { path: '**', redirectTo: 'error/404' },
];

import { Routes } from '@angular/router';
import { MainLayout } from './layout/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login.component').then(
        (component) => component.Login
      ),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./features/auth/pages/register/register.component').then(
        (component) => component.Register
      ),
  },
  {
    path: 'forgot-password',
    loadComponent: () =>
      import(
        './features/auth/pages/forgot-password/forgot-password.component'
      ).then((component) => component.ForgotPassword),
  },
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './features/dashboard/pages/dashboard/dashboard.component'
          ).then((component) => component.Dashboard),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import(
            './features/transactions/pages/transaction-list/transaction-list.component'
          ).then((component) => component.TransactionList),
      },
      {
        path: 'transactions/new',
        loadComponent: () =>
          import(
            './features/transactions/pages/transaction-form/transaction-form.component'
          ).then((component) => component.TransactionForm),
      },
      {
        path: 'transactions/:id/edit',
        loadComponent: () =>
          import(
            './features/transactions/pages/transaction-form/transaction-form.component'
          ).then((component) => component.TransactionForm),
      },
      {
        path: 'reports',
        loadComponent: () =>
          import('./features/reports/pages/reports/reports.component').then(
            (component) => component.Reports
          ),
      },
      {
        path: 'categories',
        loadComponent: () =>
          import(
            './features/categories/pages/categories/categories.component'
          ).then((component) => component.Categories),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./features/settings/pages/settings/settings.component').then(
            (component) => component.Settings
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./shared/pages/not-found/not-found.component').then(
        (component) => component.NotFound
      ),
  },
];
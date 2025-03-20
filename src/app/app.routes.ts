import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-page/dashboard-page.component'
          ).then((m) => m.DashboardPageComponent),
      },
      {
        path: 'new-flow',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-new-flow/dashboard-new-flow.component'
          ).then((m) => m.DashboardNewFlowComponent),
      },
      {
        path: 'knowledge-garden',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-knowledge-garden/dashboard-knowledge-garden.component'
          ).then((m) => m.DashboardKnowledgeGardenComponent),
      },
      {
        path: 'explore-more',
        loadComponent: () =>
          import(
            './features/dashboard/dashboard-explore-more/dashboard-explore-more.component'
          ).then((m) => m.DashboardExploreMoreComponent),
      },
      {
        path: 'upload',
        loadComponent: () =>
          import('./features/upload/upload-page/upload-page.component').then(
            (m) => m.UploadPageComponent
          ),
      },
    ],
  },

  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/login-page/login-page.component').then(
        (m) => m.LoginPageComponent
      ),
  },
];

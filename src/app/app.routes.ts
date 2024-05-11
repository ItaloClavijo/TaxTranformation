import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'tt/news',
        title: 'Admin Libros',
        loadComponent: () => import('./pages/top-head-liners/top-head-liners.component')
    },
];

import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:'',
        title: 'Admin Libros',
        loadComponent: () => import('./pages/top-head-liners/top-head-liners.component')
    },
];

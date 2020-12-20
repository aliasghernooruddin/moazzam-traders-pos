import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
    {
        path: 'admin',
        loadChildren: './views/admin/admin.module#AdminModule'
    },
    {
        path: 'dashboard',
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    }
];


import { Routes } from '@angular/router';
import { AuthGuardService } from './guard/auth-guard.service';
import { SecureInnerPagesGuard } from './guard/secure-auth-guard.service';

export const AppRoutes: Routes = [
    // { path: '**', redirectTo: '/dashboard/main' },
    {
        path: 'admin',
        canActivate: [SecureInnerPagesGuard],
        loadChildren: './views/admin/admin.module#AdminModule'
    },
    {
        path: 'dashboard',
        canActivate: [AuthGuardService],
        loadChildren: './views/dashboard/dashboard.module#DashboardModule'
    }
];


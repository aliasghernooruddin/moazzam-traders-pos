import { Routes } from '@angular/router';
import { LayoutComponent } from 'app/views/dashboard/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const DashboardRoutes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [{
        path: 'main',
        component: DashboardComponent
    },
    {
        path: 'supplier',
        loadChildren: './supplier/supplier.module#SupplierModule'
    },
    {
        path: 'user',
        loadChildren: './user/user.module#UserModule'
    },
    {
        path: 'structure',
        loadChildren: './structure/structure.module#StructureModule'
    }]
}];

import { Routes } from '@angular/router';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

export const SupplierRoutes: Routes = [{
    path: '',
    children: [{
        path: 'suppliers',
        component: SuppliersComponent
    }, {
        path: 'create',
        component: SupplierCreateComponent
    }]
}];

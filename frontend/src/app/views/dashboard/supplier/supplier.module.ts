import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SupplierCreateComponent } from './supplier-create/supplier-create.component';
import { SupplierEditComponent } from './supplier-edit/supplier-edit.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { SupplierRoutes } from './supplier.routing.module';
import { MaterialModule } from 'app/shared/materials.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTableComponent } from 'app/tables/datatable.net/datatable.component';

@NgModule({
    declarations: [SupplierCreateComponent, SupplierEditComponent, SuppliersComponent, DataTableComponent],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        RouterModule.forChild(SupplierRoutes),
    ]
})

export class SupplierModule { }

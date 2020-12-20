import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardRoutes } from './dashboard.routing.module';
import { LayoutComponent } from 'app/views/dashboard/layout/layout.component';
import { NavbarModule } from 'app/shared/navbar/navbar.module';
import { SidebarModule } from 'app/shared/sidebar/sidebar.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SupplierModule } from './supplier/supplier.module';
import { MaterialModule } from 'app/shared/materials.module';
import { UserModule } from './user/user.module';
import { StructureModule } from './structure/structure.module';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent],
  imports: [
    SidebarModule,
    NavbarModule,
    MaterialModule,
    CommonModule,
    SupplierModule,
    UserModule,
    StructureModule,
    RouterModule.forChild(DashboardRoutes),
  ]
})
export class DashboardModule { }

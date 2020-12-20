import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuresComponent } from './structures/structures.component';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructureEditComponent } from './structure-edit/structure-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'app/shared/materials.module';
import { StructureRoutes } from './structure.routing.module';


@NgModule({
  declarations: [StructuresComponent, StructureCreateComponent, StructureEditComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule.forChild(StructureRoutes),
  ]
})
export class StructureModule { }

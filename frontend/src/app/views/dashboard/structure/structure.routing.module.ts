import { Routes } from '@angular/router';
import { StructureCreateComponent } from './structure-create/structure-create.component';
import { StructuresComponent } from './structures/structures.component';

export const StructureRoutes: Routes = [{
    path: '',
    children: [{
        path: 'structures',
        component: StructuresComponent
    }, {
        path: 'create',
        component: StructureCreateComponent
    }]
}];

import { Routes } from '@angular/router';
import { UserCreateComponent } from './user-create/user-create.component';
import { UsersComponent } from './users/users.component';

export const UserRoutes: Routes = [{
    path: '',
    children: [{
        path: 'users',
        component: UsersComponent
    }, {
        path: 'create',
        component: UserCreateComponent
    }]
}];

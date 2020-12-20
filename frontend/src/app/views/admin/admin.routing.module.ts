import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const AdminRoutes: Routes = [{
    path: '',
    children: [{
        path: 'login',
        component: LoginComponent
    }]
}];

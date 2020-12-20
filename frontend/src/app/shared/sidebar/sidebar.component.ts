import { Component, OnInit } from '@angular/core';

//Metadata
export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    collapse?: string;
    icontype: string;
    // icon: string;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    ab: string;
    type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
    path: '/dashboard/main',
    title: 'Dashboard',
    type: 'link',
    icontype: 'nc-icon nc-bank'
}, {
    path: '/dashboard/supplier',
    title: 'Supplier',
    type: 'sub',
    collapse: 'supplier',
    icontype: 'nc-icon nc-layout-11',
    children: [
        { path: 'suppliers', title: 'Suppliers', ab: 'S' },
        { path: 'create', title: 'Add Supplier', ab: 'AS' }
    ]
}, {
    path: '/dashboard/user',
    title: 'Users',
    type: 'sub',
    collapse: 'users',
    icontype: 'nc-icon nc-box',
    children: [
        { path: 'users', title: 'Users', ab: 'U' },
        { path: 'create', title: 'Add User', ab: 'AU' }
    ]
}, {
    path: '/dashboard/structure',
    title: 'Structure',
    type: 'sub',
    collapse: 'structure',
    icontype: 'nc-icon nc-ruler-pencil',
    children: [
        { path: 'structures', title: 'Structures', ab: 'S' },
        { path: 'create', title: 'Add Structure', ab: 'AS' },
    ]
}, 
// {
//     path: '/tables',
//     title: 'Tables',
//     type: 'sub',
//     collapse: 'tables',
//     icontype: 'nc-icon nc-single-copy-04',
//     children: [
//         { path: 'regular', title: 'Regular Tables', ab: 'RT' },
//         { path: 'extended', title: 'Extended Tables', ab: 'ET' },
//         { path: 'datatables.net', title: 'Datatables.net', ab: 'DT' }
//     ]
// }, {
//     path: '/maps',
//     title: 'Maps',
//     type: 'sub',
//     collapse: 'maps',
//     icontype: 'nc-icon nc-pin-3',
//     children: [
//         { path: 'google', title: 'Google Maps', ab: 'GM' },
//         { path: 'fullscreen', title: 'Full Screen Map', ab: 'FSM' },
//         { path: 'vector', title: 'Vector Map', ab: 'VM' }
//     ]
// }, {
//     path: '/charts',
//     title: 'Charts',
//     type: 'link',
//     icontype: 'nc-icon nc-chart-bar-32'

// }, {
//     path: '/calendar',
//     title: 'Calendar',
//     type: 'link',
//     icontype: 'nc-icon nc-calendar-60'
// }, {
//     path: '/pages',
//     title: 'Pages',
//     collapse: 'pages',
//     type: 'sub',
//     icontype: 'nc-icon nc-book-bookmark',
//     children: [
//         { path: 'timeline', title: 'Timeline Page', ab: 'T' },
//         { path: 'user', title: 'User Page', ab: 'UP' },
//         { path: 'login', title: 'Login Page', ab: 'LP' },
//         { path: 'register', title: 'Register Page', ab: 'RP' },
//         { path: 'lock', title: 'Lock Screen Page', ab: 'LSP' }
//     ]
// }
];

@Component({
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];

    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}

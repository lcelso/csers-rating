import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/list/list.component';
import { OneOnOneComponent } from './user/one-on-one/one-one-one.component';

import { NgModule } from '@angular/core';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { TableComponent } from './table/table.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { NotificationsComponent } from './notifications/notifications.component';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: 'user/list',
        pathMatch: 'full',
    },
    // {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // },
    {
        path: 'user',
        component: UserComponent,
    },
    { path: 'user/list', component: UserListComponent },
    { path: 'users/one-on-one', component: OneOnOneComponent },
    { path: 'user/edit/:id', component: UserComponent }

    // {
    //     path: 'table',
    //     component: TableComponent
    // },
    // {
    //     path: 'typography',
    //     component: TypographyComponent
    // },
    // {
    //     path: 'icons',
    //     component: IconsComponent
    // },
    // {
    //     path: 'notifications',
    //     component: NotificationsComponent
    // },
];

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
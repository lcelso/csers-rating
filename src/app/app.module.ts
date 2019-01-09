import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { segmentReducer } from './state-management/reducers/segment.reducer';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from '../app/app.routing';

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { NavbarIntModule } from './shared/navbar-int/navbar-int.module';

import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';

import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/list/list.component';
import { OneOnOneComponent } from './user/one-on-one/one-one-one.component'
import { FilterPipe } from './user/one-on-one/filter.pipe'

// import { DashboAppRoutingModuleardComponent } from './dashboard/dashboard.component';
// import { TableComponent } from './table/table.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    OneOnOneComponent,
    FilterPipe,
    // DashboardComponent,
    // TableComponent,
    // TypographyComponent,
    // IconsComponent,
    // NotificationsComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    StoreModule.forRoot({
      segmentReducer: segmentReducer
    }),
    StoreDevtoolsModule.instrument(),
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    NavbarIntModule,
    FooterModule,
    FixedPluginModule,
    FormsModule,
    CommonModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

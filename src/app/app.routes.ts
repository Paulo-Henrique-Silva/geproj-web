import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { RecycleBinComponent } from './recycle-bin/recycle-bin.component';
import { ReportsComponent } from './reports/reports.component';
import { TagsComponent } from './tags/tags.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent, pathMatch:'full' },
    { path: 'home', component: HomeComponent, pathMatch:'full' },
    { path: 'admin', component: AdminComponent, pathMatch:'full' },
    { path: 'recycle-bin', component: RecycleBinComponent, pathMatch:'full' },
    { path: 'reports', component: ReportsComponent, pathMatch:'full' },
    { path: 'tags', component: TagsComponent, pathMatch:'full' },
];

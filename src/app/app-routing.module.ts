import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {BackupComponent} from './backup/backup.component';
import { UserComponent } from './user/user.component';
import { ModelsComponent } from './models/models.component';
import { DatabasesComponent } from './databases/databases.component';
import { QueryComponent } from './query/query.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'databases', component: DatabasesComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UserComponent, canActivate: [AuthGuard] },
  { path: 'query', component: QueryComponent, canActivate: [AuthGuard] },
  { path: 'models', component: ModelsComponent, canActivate: [AuthGuard] },
  { path: 'backup', component: BackupComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

  constructor() { }
}

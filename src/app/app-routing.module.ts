import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { hasRoleGuard } from './has-role.guard';
import { Role } from './role';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  //Path do admin apenas para usuarios com a role de admin
  {path: 'admin',
  component: AdminComponent,
  canActivate: [hasRoleGuard],
  data: {roles: [Role.ADMIN]}
  },
  {path: 'unauthorized', component: UnauthorizedComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

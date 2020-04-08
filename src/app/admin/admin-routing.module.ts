import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '../admin/login/login.component';
import { RegisterComponent } from '../admin/register/register.component';
import { ForgotPasswordComponent } from '../admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from '../admin/verify-email/verify-email.component';
import { AdminComponent } from '../admin/admin/admin.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';


const routes: Routes = [
  {
  path: 'admin',
  component: AdminComponent,
  children: [
    {
      path: '',
      children: [
      { path: 'login', component: LoginComponent},
      { path: 'dashboard', component: DashboardComponent},
      { path: 'register', component: RegisterComponent },
      { path: 'forgot-password', component: ForgotPasswordComponent },
      { path: 'verify-email', component: VerifyEmailComponent }
      ]
    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

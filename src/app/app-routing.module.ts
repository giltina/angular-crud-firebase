import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { PolicyListComponent } from './policy-list/policy-list.component';
import { FormAppointmentComponent } from './form-appointment/form-appointment.component';

import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AdminComponent } from './admin/admin/admin.component';

const routes: Routes = [
{ path: 'add-policy', component: PolicyAddComponent },
{ path: 'list-policy', component: PolicyListComponent },
{ path: 'form', component: FormAppointmentComponent },
{ path: '', redirectTo: '/list-policy', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

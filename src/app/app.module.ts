import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { PolicyService } from './policy.service';
import { PolicyListComponent } from './policy-list/policy-list.component';

import {  FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AdminComponent } from './admin/admin/admin.component';

import { AdminModule } from './admin/admin.module';
import { HttpClientModule } from '@angular/common/http';
import { FormAppointmentComponent } from './form-appointment/form-appointment.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyAddComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AdminComponent,
    FormAppointmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

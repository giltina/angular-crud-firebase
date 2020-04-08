import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { PolicyService } from './policy.service';
import { PolicyListComponent } from './policy-list/policy-list.component';

import {  FormsModule,  ReactiveFormsModule  } from '@angular/forms';
import { PolicyAddComponent } from './policy-add/policy-add.component';

@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PolicyService],
  bootstrap: [AppComponent]
})
export class AppModule { }

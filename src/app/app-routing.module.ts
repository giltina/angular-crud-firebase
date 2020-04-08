import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PolicyAddComponent } from './policy-add/policy-add.component';
import { PolicyListComponent } from './policy-list/policy-list.component';

const routes: Routes = [
{ path: 'add-policy', component: PolicyAddComponent },
{ path: 'list-policy', component: PolicyListComponent },
// { path: '', redirectTo: '/list-policy', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

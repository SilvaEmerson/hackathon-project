import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { CompanyListComponent } from './company-list/company-list.component';

const routes: Routes = [
  { path:'login', component: LoginComponent },
  { path:'companies', component: CompanyListComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

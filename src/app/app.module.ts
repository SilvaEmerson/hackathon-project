import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { CompanyComponent } from './company/company.component';
import { LoginComponent } from './login/login.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from '@angular/fire/database';
import { environment } from '../environments/environment';
import { CompanyListComponent } from './company-list/company-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { UserComponent } from './user/user.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyComponent,
    LoginComponent,
    CompanyListComponent,
    EmployeeComponent,
    EmployeeListComponent,
    VacancyComponent,
    UserComponent,
    VacancyListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.FIREBASE_CONFIG),
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent],
  entryComponents: [VacancyListComponent]
})
export class AppModule {}

import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

import { Company } from '../Company';
import { Employee } from '../Employee';
import { chechIfExists, sendPayload } from "../../utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EmployeeCollection: AngularFirestoreCollection<Employee>;
  CompanyCollection: AngularFirestoreCollection<Company>;

  Employees: Observable<Employee[]>;
  Companies: Observable<Company[]>;

  alreadyContained: boolean = false;
  companySendPayload: Company = new Company();
  employeeSendPayload: Employee = new Employee();
  currentUserUid: string;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    ) {
    this.EmployeeCollection = afs.collection<Employee>('employee');
    this.Employees = this.EmployeeCollection.valueChanges();

    this.CompanyCollection = afs.collection<Company>('company');
    this.Companies = this.CompanyCollection.valueChanges();

    if (this.afAuth.user) {
      this.afAuth.user.subscribe(async user => {
        if(user !== null) {
          this.currentUserUid = user.uid;
          this.alreadyContained = (await chechIfExists(this.EmployeeCollection, user.uid) ||
            await chechIfExists(this.CompanyCollection, user.uid));
        }
      })
    }
  }

  login() {
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  ngOnInit() {
  }

  async confirmRegister(company) {
    (company)
      ? sendPayload(this.companySendPayload, this.currentUserUid, this.CompanyCollection)
      : sendPayload(this.employeeSendPayload, this.currentUserUid, this.EmployeeCollection)
  }
}

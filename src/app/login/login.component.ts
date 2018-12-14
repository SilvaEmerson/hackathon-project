import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';

import { Company } from '../Company';
import { Employee } from '../Employee';
import { chechIfExists } from "../../utils";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  EmployeerCollection: AngularFirestoreCollection<Employee>;
  CompanyCollection: AngularFirestoreCollection<Company>;

  Employeers: Observable<Employee[]>;
  Companies: Observable<Company[]>;

  alreadyContained: boolean = false;
  companySendPayload: Company = new Company();
  employeeSendPayload: Employee = new Employee();
  currentUserUid: string;

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    ) {
    this.EmployeerCollection = afs.collection<Employee>('employee');
    this.Employeers = this.EmployeerCollection.valueChanges();

    this.CompanyCollection = afs.collection<Company>('company');
    this.Companies = this.CompanyCollection.valueChanges();

    if (this.afAuth.user) {
      this.afAuth.user.subscribe(res => console.log(res))
      this.afAuth.user.subscribe(async user => {
        this.currentUserUid = user.uid;
        this.alreadyContained = (await chechIfExists(this.EmployeerCollection, user.uid) ||
        await chechIfExists(this.CompanyCollection, user.uid));
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
      ? (async () => {
        this.companySendPayload.user_uid = this.currentUserUid;
        let result  = await this.CompanyCollection.add(
          Object.assign({}, this.companySendPayload)
        );
        console.log(`Company ${result.id} saved!`)
      })()
      : (async () => {
        this.employeeSendPayload.user_uid = this.currentUserUid;
        let result = await this.EmployeerCollection.add(
          Object.assign({}, this.employeeSendPayload)
        );
        console.log(`Company ${result.id} saved!`)
      })()
  }
}

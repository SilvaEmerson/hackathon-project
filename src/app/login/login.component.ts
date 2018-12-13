import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { auth } from 'firebase/app';
import { Observable } from 'rxjs';
import { Company } from '../Company';
import { Employee } from '../Employee';

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

  constructor(
    public afAuth: AngularFireAuth,
    private afs: AngularFirestore) {
    this.EmployeerCollection = afs.collection<Employee>('employee');
    this.Employeers = this.EmployeerCollection.valueChanges();

    this.CompanyCollection = afs.collection<Company>('companies');
    this.Companies = this.CompanyCollection.valueChanges();

    if (this.afAuth.user) {
      this.afAuth.user.subscribe(res => console.log(res))
      this.afAuth.user.subscribe(user => {
        let result = this.CompanyCollection.ref.where('login_id', '==', user.uid)
        result.get().then(res => this.alreadyContained = !!res.docs);
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

  confirmRegister(company, employee) {

  }
}

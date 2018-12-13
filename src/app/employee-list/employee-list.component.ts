import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Employee } from "../Employee";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private EmployeerCollection: AngularFirestoreCollection<Employee>;
  Employeers: Observable<Employee[]>;

  constructor(private afs: AngularFirestore) {
    this.EmployeerCollection = afs.collection<Employee>('employee');
    this.Employeers = this.EmployeerCollection.valueChanges();
    this.Employeers.subscribe(data => data.map(el => console.log(el)));
  }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Company } from "../Company";

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})
export class CompanyListComponent implements OnInit {

  private CompaniesCollection: AngularFirestoreCollection<Company>;
  Companies: Observable<Company[]>;

  constructor(private afs: AngularFirestore) {
    this.CompaniesCollection = afs.collection<Company>('company');
    this.Companies = this.CompaniesCollection.valueChanges();
    this.Companies.subscribe(data => data.map(el => console.log(el)));
  }
  addCompany(Company: Company) {
    this.CompaniesCollection.add(Company);
  }

  ngOnInit() {
  }

}

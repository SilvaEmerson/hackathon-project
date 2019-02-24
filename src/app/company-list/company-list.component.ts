import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Company } from '../Company';

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
    this.Companies = this.CompaniesCollection.snapshotChanges().pipe(
      map(el => el.map(companie => {
          const data = companie.payload.doc.data();
          const id = companie.payload.doc.ref.id;
          return { id, ...data } as Company;
        })
      )
    );
  }
  addCompany(company: Company) {
    this.CompaniesCollection.add(company);
  }

  ngOnInit() {
  }

}

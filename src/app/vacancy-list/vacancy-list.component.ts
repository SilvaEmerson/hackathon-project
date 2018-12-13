import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Vacancy } from "../Vacancy";
import { mapChildrenIntoArray } from '@angular/router/src/url_tree';
import { Company } from '../Company';

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  private CompaniesCollection: AngularFirestoreCollection<Company>;
  Vacancies: Observable<Company[]>;

  // constructor(private afs: AngularFirestore) { 
  //   this.CompaniesCollection = afs.collection<Company>('company');
  //   this.Companies = this.CompaniesCollection.valueChanges();
  //   this.Companies.subscribe(data => data.map(el => console.log(el)));
  // }

  ngOnInit() {
  }

}

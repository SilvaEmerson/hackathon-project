import { Component, OnInit, Input } from '@angular/core';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { MatDialog } from '@angular/material';
import { Company } from "../Company";
import { Vacancy } from '../Vacancy';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  private VacancyCollection: AngularFirestoreCollection<Vacancy>;
  Vacancies: Observable<Vacancy[]>;

  @Input() company: Company;

  constructor(
    public dialog : MatDialog,
    private afs: AngularFirestore,
  ) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(VacancyListComponent, {
      width: '60%',
      data: this.company,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
    this.VacancyCollection = this.afs.collection<Vacancy>('vacancy',
      ref => ref.where('reference.id', '==', this.company.id)
    );
    this.company.vacancies = this.VacancyCollection.valueChanges();
  }

}

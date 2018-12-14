import { Component, Inject, OnInit } from '@angular/core';
import { CompanyComponent } from '../company/company.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material'
import { Company } from '../Company'; 

@Component({
  selector: 'app-vacancy-list',
  templateUrl: './vacancy-list.component.html',
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<CompanyComponent>, @Inject(MAT_DIALOG_DATA) public companie: Company[]) {}

  // onNoClick(): void {
  //   console.log(this.Vacancies);
  //   this.dialogRef.close();
  // }

  ngOnInit() {
  }

}

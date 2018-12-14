import { Component, OnInit, Input } from '@angular/core';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { MatDialog } from '@angular/material';
import { Company } from "../Company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  @Input() company: Company;
  constructor(public dialog : MatDialog) {}
  
  openDialog(): void {
    const dialogRef = this.dialog.open(VacancyListComponent, {
      width: '60%',
      data: {name: this.company.name, vacancies:[{ position: "a", workload: "a", salary: 1200, description: "siwsjiwjs" }, { position: "a", workload: "a", salary: 1200, description: "siwsjiwjs" }, { position: "a", workload: "a", salary: 1200, description: "siwsjiwjs" }, { position: "a", workload: "a", salary: 1200, description: "siwsjiwjs" }]
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  ngOnInit() {
  }

}

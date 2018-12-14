import { Component, OnInit, Input} from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Vacancy } from '../Vacancy';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  @Input() vacancy: Vacancy; 
  constructor(public snackBar: MatSnackBar) { }

  openSnackBar(event, message: string, action: string) {
    event.target.style.visibility="hidden";
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }
  
  ngOnInit() {
  }

}

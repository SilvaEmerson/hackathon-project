import { Component, OnInit, Input} from '@angular/core';
import { Vacancy } from '../Vacancy';
@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  @Input() vacancy: Vacancy; 
  constructor() { }

  ngOnInit() {
  }

}

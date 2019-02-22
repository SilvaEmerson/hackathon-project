import { Vacancy } from './Vacancy';
import { Observable } from 'rxjs';

export class Company {
    id: string;
    name: string;
    category: string;
    description: string;
    cnpj: string;
    user_uid: string;
    vacancies: Observable<Vacancy[]>;
}

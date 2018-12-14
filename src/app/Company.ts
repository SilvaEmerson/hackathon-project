import { Vacancy } from './Vacancy';

export class Company {
    name: string;
    category: string;
    description: string; 
    cnpj: string;
    vacancies: Vacancy[];
}
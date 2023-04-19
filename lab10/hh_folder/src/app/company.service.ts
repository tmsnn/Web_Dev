import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Company, Vacancy } from './models';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private client: HttpClient) { }

  getCompanies(): Observable<Company[]> {
      return this.client.get<Company[]>(`${this.BASE_URL}/api/companies/`);
  }

  createCompany(companyName: string) : Observable<Company> {
      return this.client.post<Company>(`${this.BASE_URL}/api/companies/`,
          {name : companyName}
      );
  }

  deleteCompany(company_id: number): Observable<any> {
      return this.client.delete(
        `${this.BASE_URL}/api/companies/${company_id}/`
      )
  }
}

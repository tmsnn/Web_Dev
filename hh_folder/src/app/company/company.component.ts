import {Component, OnInit} from '@angular/core';
import {CompanyService} from '../company.service';
import {VacancyService} from '../vacancy.service';
import {Company, Vacancy} from '../models';
@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit{

    companies: Company[] = [];
    vacancies: Vacancy[] = [];
    newCompany : string = ``;
    constructor(private companyService: CompanyService,
                private vacancyService: VacancyService) {

    }


    ngOnInit() {
        this.companyService.getCompanies().subscribe((companies) => {
          // console.log(data);
          this.companies = companies;
        });
    }

    addCompany(){
      // console.log(this.newCompany);
      this.companyService.createCompany(this.newCompany).subscribe((company) => {
        // console.log(data);
        this.companies.push(company);
        this.newCompany = '';
      });
    }

    getVacancies(companyId: number): void {
      this.vacancyService.getCompanyVacancies(companyId)
        .subscribe(vacancies => this.vacancies = vacancies);
    }

    deleteCompany(company_id: number) {
      this.companyService.deleteCompany(company_id).subscribe((data) => {
        this.companies = this.companies.filter((company) => company.id !== company_id);
        console.log(data)
      });
    }

}

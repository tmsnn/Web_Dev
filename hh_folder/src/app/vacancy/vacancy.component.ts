import { Component, OnInit } from '@angular/core';
import { Vacancy } from '../models';
import { ActivatedRoute } from '@angular/router';
import { VacancyService } from '../vacancy.service';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit{
  vacancies: Vacancy[] = [];
  company_id!: number;

  constructor(private route: ActivatedRoute,
              private vacancyService: VacancyService) {}

  ngOnInit(): void {
    this.company_id = this.route.snapshot.params['id'];
    this.vacancyService.getCompanyVacancies(this.company_id).subscribe((data) => {
      this.vacancies = data;
    });
  }
}

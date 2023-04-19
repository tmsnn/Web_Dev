import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {VacancyComponent} from './vacancy/vacancy.component';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  { path: '', component: CompanyComponent, pathMatch: 'full'},
  { path: 'companies', component: CompanyComponent },
  { path: 'companies/:id/vacancies', component: VacancyComponent },
  { path: '', redirectTo: 'companies', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

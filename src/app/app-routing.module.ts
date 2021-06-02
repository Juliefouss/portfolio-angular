import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {IndexJulieFoussComponent} from './index-julie-fouss/index -julie-fouss.component';
import {ParcoursJulieFoussComponent} from './parcours-julie-fouss/parcours-julie-fouss.component';
import {PortfolioJulieFoussComponent} from './portfolio-julie-fouss/portfolio-julie-fouss.component';
import {CompetenceJulieFoussComponent} from './competence-julie-fouss/competence-julie-fouss.component';
import {ContactJulieFoussComponent} from './contact-julie-fouss/contact-julie-fouss.component';

//On va créer des routes en ajoutant pour chaque component un path avec le nom et le nom du component qui correspond à ce path
const routes: Routes = [
  {
    path: '',
    component: IndexJulieFoussComponent,
  },
  {
    path: 'Parcours',
    component: ParcoursJulieFoussComponent,
  },
  {
    path: 'Portfolio',
    component: PortfolioJulieFoussComponent,
  },
  {
    path: 'Compétence',
    component: CompetenceJulieFoussComponent,
  },
  {
    path: 'Contact',
    component: ContactJulieFoussComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import {Competences} from '../services/compétences/competences.model';
import {CompetencesService} from '../services/compétences/competences.service';

@Component({
  selector: 'app-competence-julie-fouss',
  templateUrl: './competence-julie-fouss.component.html',
  styleUrls: ['./competence-julie-fouss.component.css']
})
// on doit exporter la classe Compétences pour pouvoir utiliser le service
export class CompetenceJulieFoussComponent implements OnInit {
  competence: Competences [] | null | undefined;

  constructor(private competenceService: CompetencesService) { }

  // Pour executer et envoyer. La réponse va être envoyée dans le body
  ngOnInit(): void {
    this.competenceService.findAll()
      .subscribe( skillResponse => this.competence = skillResponse.body);
  }

}

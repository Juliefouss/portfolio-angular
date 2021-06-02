import { Component, OnInit } from '@angular/core';
import {Realisations} from '../services/realisations/realisations.model';
import {RealisationsService} from '../services/realisations/realisations.service';
import {SERVER_LOCATION} from '../../global';

@Component({
  selector: 'app-portfolio-julie-fouss',
  templateUrl: './portfolio-julie-fouss.component.html',
  styleUrls: ['./portfolio-julie-fouss.component.css']
})
export class PortfolioJulieFoussComponent implements OnInit {
  // on doit exporter la classe realisations pour pouvoir utiliser le service
  realisation: Realisations[] | null | undefined ;
  // on utilise le server location pour donner le lien de l api
   server = SERVER_LOCATION;
   constructor(private realisationsService: RealisationsService)
   { }
// Pour executer et envoyer. La réponse va être envoyée dans le corps du travail;
  ngOnInit(): void {
    this.realisationsService.findAll()
      .subscribe(reaResponse => this.realisation = reaResponse.body);
  }

}

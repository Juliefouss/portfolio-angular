import { Injectable } from '@angular/core';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Realisations} from './realisations.model';
import {SERVER_LOCATION} from '../../../global';



// Quand on a pas d'api
// @Injectable({
//   providedIn: 'root'
// })
//
// export class RealisationsService {
//
//   constructor() {
//   }
//
//
//   findAll(): Observable<HttpResponse<Realisations[]>> {
//     let realisation: Realisations[];
//     realisation = [
//       new Realisations(1, '../assets/plant-2004483_1920.jpg', 'plants', 'voyage en Italie', DateTime, '#'),
//       new Realisations(2, '../assets/joanna-kosinska-3BgkveM3y_k-unsplash.jpg', 'desk with a plant', 'Covid 19', 'DateTime', '#'),
//       new Realisations(3, '../assets/kevin-bhagat-zNRITe8NPqY-unsplash.jpg', 'office', 'webdesign', 'DateTime', '#'),
//       new Realisations(4, '../assets//jazmin-quaynor-8ioenvmof-I-unsplash.jpg', 'eucalyptus', 'à venir', 'à venir', '#'),
//       new Realisations(5, '../assets/branch-4648579_640.jpg', 'branche', 'à venir', 'à venir', '#'),
//       new Realisations(6, '../assets/bench-accounting-nvzvOPQW0gc-unsplash.jpg', 'desk with a chair', 'à venir', 'à venir', '#'),
//       new Realisations(7, '../assets/leone-venter-VieM9BdZKFo-unsplash.jpg', 'tablet with coffee', 'à venir', 'à venir', '#'),
//       new Realisations(8, '../assets/leone-venter-pVt9j3iWtPM-unsplash.jpg', 'phone with coffee', 'à venir', 'à venir', '#'),
//     ];
//     return of(new HttpResponse({body: realisation}));
//   }
// }

// méthode avec api

@Injectable({
  providedIn: 'root'
})
export class RealisationsService {
  // on donne le lien api.ph en plus du serveur pour qu'il se connecte directement sur l api
// les headers sont important pour l'autorisation

  private SERVER_URL = SERVER_LOCATION + 'api.php?page=realisations';
  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  });

// httpClient va permettre de faire des requetes vers le serveur
  constructor( private httpClient: HttpClient) {}

// On va questionner le serveur attendre les réponses pour les compétences et puis envoyer la reponse
  findAll(searchParams?: any): Observable <HttpResponse<Realisations[]>>{
    return this.httpClient.get<Realisations[]>(this.SERVER_URL, {params : searchParams , headers: this.httpHeaders , observe: 'response'});
  }
}

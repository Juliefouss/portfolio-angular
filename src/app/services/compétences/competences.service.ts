import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Competences} from './competences.model';
import {SERVER_LOCATION} from '../../../global';

// Cette méthode c'est lorsque nous n'utilisons pas de serveur
// @Injectable({
//   providedIn: 'root'
// })
// export class CompetencesService {
//
//   constructor() { }
//
// findAll(): Observable<HttpResponse<Competences[]>> {
//   const competence = [
//     new Competences('HTML', 40, 'progress20', 'progress20', 'rest20', 'rest20', 'rest20'),
//     new Competences('CSS', 40, 'progress20', 'progress20', 'rest20', 'rest20', 'rest20' ),
//     new Competences('Javascript', 20, 'progress20', 'rest20', 'rest20', 'rest20', 'rest20'),
//     new Competences( 'PHP', 20, 'progress20', 'rest20', 'rest20', 'rest20', 'rest20'),
//     new Competences('Angular', 20, 'progress20', 'rest20', 'rest20', 'rest20', 'rest20' ),
//   ];
//   return of(new HttpResponse({body: competence}));
// }
// }

@Injectable({
  providedIn: 'root'
})
export class CompetencesService  {
  private SERVER_URL = SERVER_LOCATION + 'api.php?page=competences';

  // on donne le lien api.ph en plus du serveur pour qu'il se connecte directement sur l api
// les headers sont important pour l'autorisation

  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  });
// httpClient va permettre de faire des requetes vers le serveur
  constructor( private httpClient: HttpClient) {}

// On va questionner le serveur attendre les réponses pour les compétences et puis envoyer la reponse

  findAll(searchParams?: any): Observable <HttpResponse<Competences[]>>{
    return this.httpClient.get<Competences[]>(this.SERVER_URL, {params : searchParams , headers: this.httpHeaders , observe: 'response'});
  }
  }

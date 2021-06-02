import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ContactMessage} from './contact-message.model';
import {SERVER_LOCATION} from '../../../global';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

   private SERVER_URL = SERVER_LOCATION + 'api.php';
   // on donne le lien api.ph en plus du serveur pour qu'il se connecte directement sur l api
// les headers sont important pour l'autorisation
  private httpHeaders = new HttpHeaders({
    'Content-Type':  'application/json',
    Accept: 'application/json'
  });
  // httpClient va permettre de faire des requetes vers le serveur
  constructor( private httpClient: HttpClient) {}

  // On va questionner le serveur et puis créer un nouveau message
    findAll(searchParams?: any): Observable <HttpResponse<ContactMessage[]>>{
    return this.httpClient.get<ContactMessage[]>
    (this.SERVER_URL, {params : searchParams , headers: this.httpHeaders , observe: 'response'});
  }
  create(message: ContactMessage): Observable<HttpResponse<ContactMessage>>{
    return this.httpClient.post<ContactMessage>( this.SERVER_URL, message, {observe: 'response'});
  }
}

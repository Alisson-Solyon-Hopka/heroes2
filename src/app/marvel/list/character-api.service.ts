import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  constructor(private https: HttpClient){}

  getCaracters(): Observable <CharactersApiService[]> {
    return this.https.get<CharactersApiService[]>(`${environment.marvel_api.url_base}characters?ts=1&apikey=${environment.marvel_api.public_key}&hash=${environment.marvel_api.hash}&limit=100`);
  }

  getCaracter(id): Observable <CharactersApiService[]> {
    return this.https.get<CharactersApiService[]>(`${environment.marvel_api.url_base}characters/${id}?ts=1&apikey=${environment.marvel_api.public_key}&hash=${environment.marvel_api.hash}&limit=100`);
  }

}

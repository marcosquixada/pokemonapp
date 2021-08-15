import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Poke } from '../model/poke.model';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({ providedIn: 'root' })
export class PokeService {

    apiUrl = 'https://api.pokemontcg.io/v2/cards/';
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json'
        })
      };

    constructor(
        private httpClient: HttpClient
    ) {}

    public getPoke(id: string): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + id);
    }

    public getPokes(): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + '?orderBy=name&q=supertype:Pokémon');
    }

    public getPokesWithFlag(flag: string): Observable<ResponsePageable> {
        return this.httpClient.get<ResponsePageable>(this.apiUrl + '?flag=' + flag);
    }

    public postPokes(poke: any): Observable<Poke> {
        return this.httpClient.post<any>(this.apiUrl, poke, this.httpOptions);
    }

}

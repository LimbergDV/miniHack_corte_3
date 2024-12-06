import { Injectable } from '@angular/core';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Character } from '../cards/character';
import { forkJoin } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  baseUrl = 'https://rickandmortyapi.com/api/episode'; 

  constructor(private http: HttpClient) {}

  obtenerEpisodios(): Observable<Episode[]> {  
    return this.http.get<{ results: Episode[] }>(`${this.baseUrl}`).pipe(
      map(response => response.results) 
    );
  }
  obtenerPersonajesPorEpisodio(urls: string[]): Observable<Character[]> {
    if (urls && urls.length > 0) {
      return this.http.get<Character[]>(urls.join(','));
    } else {
      return new Observable<Character[]>();
    }
  }

  
}

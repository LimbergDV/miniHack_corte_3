import { Injectable } from '@angular/core';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

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
  
}

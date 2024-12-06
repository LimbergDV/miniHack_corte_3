import { Injectable } from '@angular/core';
import { Episode } from './episode';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EpisodeService {
  baseUrl = 'https://rickandmortyapi.com/api/episode' 
  episode: any


  constructor(private http: HttpClient) {
   }


   obtenerEpisodios(): Observable<Episode>{
    return this.http.get(`${this.baseUrl}`), this.episode
   }
}

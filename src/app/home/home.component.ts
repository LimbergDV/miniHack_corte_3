import { Component, OnInit } from '@angular/core';
import { EpisodeService } from './episode.service';
import { Episode } from './episode';
import { Character } from '../cards/character';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] 
})
export class HomeComponent implements OnInit {
  episodeData: Episode[] = []
  selectedCharacters: Character[] | null = null;

  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    this.episodeService.obtenerEpisodios().subscribe(
      (data) => {
        this.episodeData = data;  
        console.log(this.episodeData);  
      },
      (error) => {
        console.error('Error al obtener episodios:', error);  
      }
    );
  }

  onFetchCharacters(episode: Episode): void {
    this.episodeService.obtenerPersonajesPorEpisodio(episode.charactersUrls).subscribe((characters) => {
      this.selectedCharacters = characters;
      console.log(this.selectedCharacters); // Muestra los personajes en la consola
    });
  }
}

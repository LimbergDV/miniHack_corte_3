import { Component, OnInit } from '@angular/core';
import { EpisodeService } from './episode.service';
import { Episode } from './episode';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']  // Corregido a "styleUrls"
})
export class HomeComponent implements OnInit {
  episodeData: Episode[] = []
  constructor(private episodeService: EpisodeService) {}

  ngOnInit(): void {
    // Te suscribes al observable para obtener los datos
    this.episodeService.obtenerEpisodios().subscribe(
      (data) => {
        this.episodeData = data;  // Asignar los datos obtenidos
        console.log(this.episodeData);  // Solo para ver los datos en la consola
      },
      (error) => {
        console.error('Error al obtener episodios:', error);  // Manejo de errores
      }
    );
  }
}

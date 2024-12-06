import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../service/character.service';

@Component({
  selector: 'app-cards-characters',
  templateUrl: './cards-characters.component.html',
  styleUrl: './cards-characters.component.css'
})
export class CardsCharactersComponent implements OnInit {
  characters: any[] = [];
  selectedCharacter: any = null;
  currentEpisode: number = 1;

  constructor(private caractersService: CharacterService) {}

  ngOnInit(): void {
    this.caractersService.getAllCharacters().subscribe(
      (response) => {
        this.characters = response.results;
      },
      (error) => {
        console.error('Error fetching characters:', error);
      }
    );
  }

  openModal(character: any){
    this.selectedCharacter = character;
  }

  closeModal(): void{
    this.selectedCharacter = null;
  }

}

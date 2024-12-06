import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsCharactersComponent } from './cards-characters/cards-characters.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';



@NgModule({
  declarations: [
    CardsCharactersComponent,
    ViewCardsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CardsModule { }

import { Character } from "../cards/character";

export interface Episode {
    name: string;
    air_date: string;
    episode: string;
    url: string;
    charactersUrls: string[]; 
    characters?: Character[];
    created: string;
  }
  
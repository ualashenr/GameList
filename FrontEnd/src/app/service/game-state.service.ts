import { Injectable } from '@angular/core';
import { GameLong } from '../model/GameLong';

@Injectable({
  providedIn: 'root'
})
export class GameStateService {

  private selectedGame: GameLong | undefined;

  setSelectedGame(game: GameLong): void {
    this.selectedGame = game;
  }

  getSelectedGame(): GameLong | undefined {
    return this.selectedGame;
  }
}

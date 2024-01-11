import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Game } from '../model/Game';
import { GameLong } from '../model/GameLong';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private apiUrl = 'http://localhost:8080/games';

  constructor(private http: HttpClient) { }

  getGames(listId: number): Observable<Game[]> {
    const listUrl = 'http://localhost:8080/lists';
    const findGameUrl = `${listUrl}/${listId}/games`
    return this.http.get<Game[]>(findGameUrl);
  }

  getGame(gameId: number): Observable<GameLong>{
    const findGameUrl = `${this.apiUrl}/${gameId}`
    return this.http.get<GameLong>(findGameUrl);
  }
}

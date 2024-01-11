import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { List } from '../model/List';
import { Game } from '../model/Game';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  private apiUrl = 'http://localhost:8080/lists';

  constructor(private http: HttpClient) { }

  getLists(): Observable<List[]> {
    return this.http.get<List[]>(this.apiUrl);
  }

  changeCategory(listaId: number): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.apiUrl}/${listaId}/games`);
  }

  moveGame(listaId: number, sourceIndex: number, destinationIndex: number): void{
    const url = `${this.apiUrl}/${listaId}/replacement`;

    const payload = {
      sourceIndex,
      destinationIndex
    };

    this.http.post(url, payload)
        .subscribe(() => {});
  }
}

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { GameService } from '../service/game.service';
import { Game } from '../model/Game';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { List } from '../model/List';
import { ListService } from '../service/list.service';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';


@Component({
  standalone: true,
  selector: 'app-mainpage',
  imports: [CommonModule, HttpClientModule, CdkDropListGroup, CdkDropList,CdkDrag, FormsModule, RouterModule],
  providers: [GameService, ListService],
  templateUrl: './mainpage.component.html',
  styleUrl: './mainpage.component.css'
})
export class MainpageComponent implements OnInit {

  listaDeJogos: Game[];
  listas: List[];
  selectedLista: number;

  constructor(private gamesService: GameService, private listService: ListService, private router: Router, private route: ActivatedRoute) { }

  // Metodo de seleção
  selecionar(): void {
    this.route.params.subscribe(params => {
      const listaId = params['id'];
      if (listaId) {
        this.selectedLista = listaId;
        this.gamesService.getGames(listaId).subscribe(
          (data) => {
            this.listaDeJogos = data;
          },
          (error) => {
            console.error('Erro ao carregar a lista:', error);
          }
        );
      }
    });
  }

  exibirListas(): void{
    this.listService.getLists()
      .subscribe(retorno => this.listas = retorno)
  }

  ngOnInit(): void {
    this.selecionar();
    this.exibirListas();
  }

  reorderGames(e: CdkDragDrop<Game[]>): void {
    moveItemInArray( e.container.data, e.previousIndex, e.currentIndex);
    this.listService.moveGame(this.selectedLista, e.previousIndex, e.currentIndex);
  }

  carregarJogos() {
    this.listService.changeCategory(this.selectedLista).subscribe((data) => {
      this.listaDeJogos = data;
    });
  }

  onListaChange() {
    this.carregarJogos();
    this.router.navigate(['/lists', this.selectedLista]);
  }
}

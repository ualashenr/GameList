import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameLong } from '../model/GameLong';
import { MainpageComponent } from '../mainpage/mainpage.component';
import { GameService } from '../service/game.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gamepage',
  standalone: true,
  imports: [CommonModule,FormsModule,MainpageComponent],
  templateUrl: './gamepage.component.html',
  styleUrl: './gamepage.component.css'
})
export class GamepageComponent implements OnInit{

  selectedGame: GameLong | undefined;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService) { }

  ngOnInit(){
    this.route.params.subscribe(params => {
      const jogoId = params['id'];

      if (jogoId) {
        // Chamar o serviço para obter os dados do jogo
        this.gameService.getGame(jogoId).subscribe(
          (detalhesDoJogo: any) => {
            this.selectedGame = detalhesDoJogo;
          },
          erro => {
            console.error('Erro ao carregar dados do jogo', erro);
          }
        );
      } else {
        console.warn('ID do jogo não fornecido');
      }
    });
  }

}

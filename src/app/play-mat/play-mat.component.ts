import { Component, OnInit } from '@angular/core';
import {PlayerHandComponent} from "../player-hand/player-hand.component";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-play-mat',
  templateUrl: './play-mat.component.html',
  styleUrls: ['./play-mat.component.css']
})
export class PlayMatComponent implements OnInit {

  players: string[][] = []
  value = 2;
  number = 2;

  settingsForm = this.formBuilder.group({
    players: 2,
    cards: 2
  })
  currentPlayer: number = 1;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  onSubmit(){
    for(let i = 0; i < this.value; i++) {
      // @ts-ignore
      this.players.push(PlayerHandComponent.createPlayerHand(this.number))
    }
  }

  nextPlayer() {
    this.currentPlayer++;
    if(this.currentPlayer > this.players.length){
      this.currentPlayer = 1;
    }
  }

   endTurn(color: string) {
    const cardsToCheck = this.players[this.currentPlayer];

    for(let i = 0; i < cardsToCheck.length; i++) {
      if(cardsToCheck[i] == color){
        //flip cards with the same color
      }
    }
    this.nextPlayer()
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {CardComponent} from "../card/card.component";
import {inputNames} from "@angular/cdk/schematics";

@Component({
  selector: 'app-player-hand',
  templateUrl: './player-hand.component.html',
  styleUrls: ['./player-hand.component.css']
})
export class PlayerHandComponent implements OnInit {
@Input() cardsInHand: string[] = [];
  numberOfCards: number = 4;
  constructor() { }

  ngOnInit(): void {
    this.numberOfCards = 4;
    this.createPlayerHand(this.numberOfCards);
  }

   createPlayerHand(cards: number){
    for (let i = 0; i < cards; i++) {
      this.cardsInHand.push(CardComponent.randomCard())
    }
    return this.cardsInHand;
  }
}

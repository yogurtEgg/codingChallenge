import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../global-constants";
import {animate, state, style, transition, trigger} from "@angular/animations";

export interface CardData {
  imageId: string;
  state: 'default' | 'flipped' | 'matched';
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [
    trigger('cardFlip', [
      state('default', style({
        transform: 'none'
      })),
      state('flipped', style({
        transform: 'rotateY(180deg)'
      })),
      transition('default => flipped', [
        animate('400ms')
      ]),
      transition('flipped => default', [
        animate('200ms')
      ])
    ])
  ]
})
export class CardComponent implements OnInit {
  @Input() color = '';

  data: CardData = {
    imageId: '',
    state: "flipped"
  };
  constructor() { }

  ngOnInit(): void {
    this.data.state = "default";
   this.data = {
      imageId: "front-" + this.color + '.png',
     state: "default"
    };
  }

  static randomCard(){
    const color = GlobalConstants.availableColors[Math.floor(Math.random() * GlobalConstants.availableColors.length)];
    console.log(color)
    return color;
  }

  cardClicked() {
    if (this.data.state === "default") {
      this.data.state = "flipped";
    } else {
      this.data.state = "default";
    }
  }
}

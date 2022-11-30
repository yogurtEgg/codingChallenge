import {Component, Input, OnInit} from '@angular/core';
import {GlobalConstants} from "../global-constants";
import {PlayMatComponent} from "../play-mat/play-mat.component";


@Component({
  selector: 'app-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.css']
})
export class DiceComponent implements OnInit {
  @Input() playerNumber = 0;
  rolledColor = "blue"
  constructor() { }

  ngOnInit(): void {

  }

  rollColor(){
    this.rolledColor = GlobalConstants.availableColors[Math.floor(Math.random() * GlobalConstants.availableColors.length)];
  }

  diceClicked() {
    this.rollColor();
    //figure out static problem..
    // @ts-ignore
    PlayMatComponent.endTurn(this.rolledColor);
  }
}

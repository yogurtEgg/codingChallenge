import { Component, OnInit } from '@angular/core';
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  players: number = 2;
  cards: number = 2;


  constructor(
    private formBuilder: FormBuilder,) { }

  ngOnInit(): void {
  }

}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PlayerHandComponent } from './player-hand/player-hand.component';
import { DiceComponent } from './dice/dice.component';
import { SettingsComponent } from './settings/settings.component';
import { RepeatDirective } from './repeat.directive';
import {MatSliderModule} from "@angular/material/slider";
import { PlayMatComponent } from './play-mat/play-mat.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ResultCardComponent } from './result-card/result-card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    PlayerHandComponent,
    DiceComponent,
    SettingsComponent,
    RepeatDirective,
    PlayMatComponent,
    ResultCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

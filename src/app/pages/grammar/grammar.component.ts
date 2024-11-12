import {Component, Input, NgModule} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {Title} from "@angular/platform-browser";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {GrammarBlockComponent} from "../../components/grammar-block/grammar-block.component";
import {NgForOf} from "@angular/common";
import {LetterModel} from "../../models/letter.model";

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [
    TitleComponent,
    RouterLink,
    RouterLinkActive,
    GrammarBlockComponent,
    NgForOf
  ],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.css'
})
export class GrammarComponent {

  grammar_boxes = [
    "Les particules",
    "La construction de phrases",
    "Les pronoms démonstratifs",
    "Les pronoms possessifs",
    "Les nombres",
    "Les honorifiques",
  ]
}

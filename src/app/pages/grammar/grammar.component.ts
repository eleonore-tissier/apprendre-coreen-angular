import {Component, Input, NgModule, OnInit} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {Title} from "@angular/platform-browser";
import {Route, Router, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {GrammarBlockComponent} from "../../components/grammar-block/grammar-block.component";
import {NgForOf} from "@angular/common";
import {LetterModel} from "../../models/letter.model";

@Component({
  selector: 'app-grammar',
  standalone: true,
  imports: [
    TitleComponent,
    GrammarBlockComponent,
    RouterOutlet,
  ],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.css'
})
export class GrammarComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events.subscribe();
  }
}

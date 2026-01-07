import {Component, OnInit, Output} from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
// import * as events from "node:events";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './title.component.html',
  styleUrl: './title.component.css'
})
export class TitleComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  current_title: string = "Coréen";
  korean_current_title: string = "한국어";

  displayReturn = false;

  titles: { [key: string] : string; } = {
    "/": "Coréen,한구어",
    "/alphabet": "Alphabet,한글",
    "/grammar": "Grammaire,문법",
    "/vocabulary": "Vocabulaire,단어집",
    "/conjugation": "Conjugaison,동사변화",
    "/keyboard": "Clavier,기보드/자판"
  }

  ngOnInit() {
    let pageUrl = this.router.url.split('/',2);
    let titles: string[] = this.titles["/" + pageUrl[1]].split(',', 2);
    this.current_title = titles[0];
    this.korean_current_title = titles[1];
    if (this.router.url !== "/") {
      this.displayReturn = true;
    }
  }
}

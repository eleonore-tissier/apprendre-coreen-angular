import {Component, NgModule} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {Title} from "@angular/platform-browser";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-grammar',
  standalone: true,
    imports: [
        TitleComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './grammar.component.html',
  styleUrl: './grammar.component.css'
})
export class GrammarComponent {

}

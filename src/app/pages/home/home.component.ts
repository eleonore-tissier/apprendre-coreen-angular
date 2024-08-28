import { Component } from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {CardComponent} from "../../components/card/card.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [
        TitleComponent,
        CardComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}

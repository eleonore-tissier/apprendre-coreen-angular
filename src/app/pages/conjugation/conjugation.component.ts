import { Component } from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-conjugation',
  standalone: true,
    imports: [
        TitleComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './conjugation.component.html',
  styleUrl: './conjugation.component.css'
})
export class ConjugationComponent {

}

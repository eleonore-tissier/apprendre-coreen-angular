import { Component } from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-keyboard',
  standalone: true,
    imports: [
        TitleComponent,
        RouterLink,
        RouterLinkActive
    ],
  templateUrl: './keyboard.component.html',
  styleUrl: './keyboard.component.css'
})
export class KeyboardComponent {

}

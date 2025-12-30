import { Component } from '@angular/core';
import {VocabularyComponent} from "../../pages/vocabulary/vocabulary.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-aside-block',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './aside-block.component.html',
  styleUrl: './aside-block.component.css'
})
export class AsideBlockComponent {


}

import { Component } from '@angular/core';
import {GrammarBlockComponent} from "../../components/grammar-block/grammar-block.component";
import {TitleComponent} from "../../components/title/title.component";

@Component({
  selector: 'app-grammar-content',
  standalone: true,
  imports: [
    GrammarBlockComponent,
    TitleComponent
  ],
  templateUrl: './grammar-content.component.html',
  styleUrl: './grammar-content.component.css'
})
export class GrammarContentComponent {

}

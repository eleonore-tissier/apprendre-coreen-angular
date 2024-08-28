import {Component, Input} from '@angular/core';
import {LetterModel} from "../../models/letter.model";

@Component({
  selector: 'app-letter',
  standalone: true,
  imports: [],
  templateUrl: './letter.component.html',
  styleUrl: './letter.component.css'
})
export class LetterComponent {

  @Input() letter: LetterModel = {
    symbol: 'ㅂ',
    name: 'bieup',
    name_romanized: 'b',
    pronunciation: 'b'
  };


}

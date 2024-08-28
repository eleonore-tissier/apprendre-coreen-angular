import {Component, Input} from '@angular/core';
import {LetterComponent} from "../letter/letter.component";
import {getLocaleEraNames, NgForOf, NgIf} from "@angular/common";
import {LetterModel} from "../../models/letter.model";

@Component({
  selector: 'app-pronunciation-block',
  standalone: true,
    imports: [
        LetterComponent,
        NgForOf,
        NgIf
    ],
  templateUrl: './pronunciation-block.component.html',
  styleUrl: './pronunciation-block.component.css'
})
export class PronunciationBlockComponent {

  @Input() content: LetterModel[][] = [];

  @Input() is_consonant: boolean = false;
  @Input() is_special_consonant: boolean = false;
}

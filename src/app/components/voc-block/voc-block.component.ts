import {Component, Input} from '@angular/core';
import {WordModel} from "../../models/word.model";
import {CommonModule, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-voc-block',
  standalone: true,
  imports: [
    CommonModule,
    NgFor,
    NgIf
  ],
  templateUrl: './voc-block.component.html',
  styleUrl: './voc-block.component.css'
})
export class VocBlockComponent {

  @Input() title: string = '';

  @Input() content: WordModel[] = [];
}

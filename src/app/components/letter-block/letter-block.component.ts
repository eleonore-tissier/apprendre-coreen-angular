import {Component, Input, OnInit, Output} from '@angular/core';
import {LetterComponent} from "../letter/letter.component";
import {LetterModel} from "../../models/letter.model";
import {CommonModule, NgFor, NgIf} from "@angular/common";

@Component({
  selector: 'app-letter-block',
  standalone: true,
  imports: [
    LetterComponent,
    CommonModule,
    NgFor,
    NgIf
  ],
  templateUrl: './letter-block.component.html',
  styleUrl: './letter-block.component.css'
})
export class LetterBlockComponent implements OnInit {

  @Input() title: string = "Consonnes";
  @Input() korean_title: string = "자음";
  @Input() content: LetterModel[][] = [];

  @Input() itemsPerPage: number = 0;
  nb_rows: number[] = [];

  ngOnInit() {
    for (let i = 1; i <= this.itemsPerPage - 1; i++) {
      this.nb_rows.push(i);
    }
  }
}

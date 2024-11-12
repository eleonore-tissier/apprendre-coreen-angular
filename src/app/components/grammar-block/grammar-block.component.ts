import {Component, Input} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-grammar-block',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './grammar-block.component.html',
  styleUrl: './grammar-block.component.css'
})
export class GrammarBlockComponent {
  @Input() title: string = 'Grammaire';
  @Input() logo: string = '';
  @Input() url: string = '';
}

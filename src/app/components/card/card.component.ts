import {Component, Input, NgModule, Output} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title: string = '';
  @Input() logo: string = '';
  @Input() url: string = '';
}

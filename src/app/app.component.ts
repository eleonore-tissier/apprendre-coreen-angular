import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterModule, RouterOutlet} from '@angular/router';
import {TitleComponent} from "./components/title/title.component";
import {HomeComponent} from "./pages/home/home.component";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TitleComponent, HomeComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'apprendre-coreen-angular';
}

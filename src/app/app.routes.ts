import { Routes } from '@angular/router';
import {GrammarComponent} from "./pages/grammar/grammar.component";
import {HomeComponent} from "./pages/home/home.component";
import {AlphabetComponent} from "./pages/alphabet/alphabet.component";
import {KeyboardComponent} from "./pages/keyboard/keyboard.component";
import {VocabularyComponent} from "./pages/vocabulary/vocabulary.component";
import {ConjugationComponent} from "./pages/conjugation/conjugation.component";
import {GrammarContentComponent} from "./pages/grammar-content/grammar-content.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'grammar',
    component: GrammarComponent,
  },
  {
    path: 'grammar/sentences',
    component: GrammarContentComponent,
  },
  {
    path: 'grammar/particles',
    component: GrammarContentComponent,
  },
  {
    path: 'grammar/pronouns',
    component: GrammarContentComponent,
  },
  {
    path: 'grammar/numbers',
    component: GrammarContentComponent,
  },
  {
    path: 'grammar/honorifics',
    component: GrammarContentComponent,
  },
  { path: 'conjugation', component: ConjugationComponent },
  {
    path: 'vocabulary',
    loadChildren: () => import('./pages/vocabulary/vocabulary.routes').then(m => m.routes)
  },
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'alphabet', component: AlphabetComponent },
];

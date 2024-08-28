import { Routes } from '@angular/router';
import {GrammarComponent} from "./pages/grammar/grammar.component";
import {HomeComponent} from "./pages/home/home.component";
import {AlphabetComponent} from "./pages/alphabet/alphabet.component";
import {KeyboardComponent} from "./pages/keyboard/keyboard.component";
import {VocabularyComponent} from "./pages/vocabulary/vocabulary.component";
import {ConjugationComponent} from "./pages/conjugation/conjugation.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'grammar', component: GrammarComponent },
  { path: 'conjugation', component: ConjugationComponent },
  { path: 'vocabulary', component: VocabularyComponent },
  { path: 'keyboard', component: KeyboardComponent },
  { path: 'alphabet', component: AlphabetComponent },
];

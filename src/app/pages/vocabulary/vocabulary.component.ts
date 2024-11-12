import { Component } from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {AsideBlockComponent} from "../../components/aside-block/aside-block.component";
import {VocBlockComponent} from "../../components/voc-block/voc-block.component";
import {WordModel} from "../../models/word.model";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [
    TitleComponent,
    AsideBlockComponent,
    VocBlockComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.css'
})
export class VocabularyComponent {

  human_beings: WordModel[] = [
    {
      word: '남자',
      translation: 'homme',
    },
    {
      word: '여자',
      translation: 'femme',
    },
    {
      word: '아이',
      translation: 'enfant',
    },
    {
      word: '남자아이',
      translation: 'fille',
    },
    {
      word: '여자아이',
      translation: 'garçon',
    },
    {
      word: '사람',
      translation: 'personne',
    }
  ];

  school: WordModel[] = [
    {
      word: '학교',
      translation: 'école',
    },
    {
      word: '책상',
      translation: 'bureau',
    },
    {
      word: '학생',
      translation: 'étudiant',
    },
    {
      word: '도서관',
      translation: 'bibliothèque',
    },
    {
      word: '선생님',
      translation: 'professeur',
    },
  ];
}

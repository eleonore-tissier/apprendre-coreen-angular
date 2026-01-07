import {Component, OnInit} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {AsideBlockComponent} from "../../components/aside-block/aside-block.component";
import {VocBlockComponent} from "../../components/voc-block/voc-block.component";
import {WordModel} from "../../models/word.model";
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-vocabulary',
  standalone: true,
  imports: [
    TitleComponent,
    AsideBlockComponent,
    VocBlockComponent,
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './vocabulary.component.html',
  styleUrl: './vocabulary.component.css'
})
export class VocabularyComponent implements OnInit {

  constructor(
    private router: Router
  ) {}

  word_list_title = '';
  word_list: WordModel[] = [];

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

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event) {
        switch (this.router.url) {
          case '/vocabulary/human_beings':
            this.word_list = this.human_beings;
            this.word_list_title = 'Être humain';
            break;
          case '/vocabulary/school':
            this.word_list = this.school;
            this.word_list_title = 'École';
            break;
        }
      }
    });
  }
}

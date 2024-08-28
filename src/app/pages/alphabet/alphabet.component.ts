import {Component} from '@angular/core';
import {TitleComponent} from "../../components/title/title.component";
import {LetterBlockComponent} from "../../components/letter-block/letter-block.component";
import {LetterModel} from "../../models/letter.model";
import {PronunciationBlockComponent} from "../../components/pronunciation-block/pronunciation-block.component";
import {RouterLink, RouterLinkActive} from "@angular/router";

@Component({
  selector: 'app-alphabet',
  standalone: true,
  imports: [
    TitleComponent,
    LetterBlockComponent,
    PronunciationBlockComponent,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './alphabet.component.html',
  styleUrl: './alphabet.component.css'
})
export class AlphabetComponent {

  // alphabet
  consonants: LetterModel[] = [
    {
      symbol: 'ㄱ',
      name: '기역',
      name_romanized: 'gi-yeok',
      pronunciation: 'g/k'
    },
    {
      symbol: 'ㄴ',
      name: '니은',
      name_romanized: 'ni-eun',
      pronunciation: 'n'
    },
    {
      symbol: 'ㄷ',
      name: '디귿',
      name_romanized: 'di-geut',
      pronunciation: 'd/t'
    },
    {
      symbol: 'ㄹ',
      name: '리을',
      name_romanized: 'ri-eul',
      pronunciation: 'r/l'
    },
    {
      symbol: 'ㅁ',
      name: '미음',
      name_romanized: 'mi-eum',
      pronunciation: 'm'
    },
    {
      symbol: 'ㅂ',
      name: '비읍',
      name_romanized: 'bi-eup',
      pronunciation: 'b/p'
    },
    {
      symbol: 'ㅅ',
      name: '시옷',
      name_romanized: 'si-ot',
      pronunciation: 's/t'
    },
    {
      symbol: 'ㅇ',
      name: '이응',
      name_romanized: 'i-eung',
      pronunciation: '∅/ng'
    },
    {
      symbol: 'ㅈ',
      name: '지읒',
      name_romanized: 'ji-eut',
      pronunciation: 'dj/t'
    },
    {
      symbol: 'ㅊ',
      name: '치읓',
      name_romanized: 'chi-eut',
      pronunciation: 'tch\'/t'
    },
    {
      symbol: 'ㅋ',
      name: '키읔',
      name_romanized: 'ki-eut',
      pronunciation: 'k\''
    },
    {
      symbol: 'ㅌ',
      name: '티읕',
      name_romanized: 'ti-eut',
      pronunciation: 't\''
    },
    {
      symbol: 'ㅍ',
      name: '피읖',
      name_romanized: 'pi-eut',
      pronunciation: 'p\''
    },
    {
      symbol: 'ㅎ',
      name: '히읗',
      name_romanized: 'hi-eut',
      pronunciation: 'h\''
    }
  ];

  double_consonants: LetterModel[] = [
    {
      symbol: 'ㄲ',
      name: '쌍기역',
      name_romanized: 'ssang-gi-yeok',
      pronunciation: 'k*'
    },
    {
      symbol: 'ㄸ',
      name: '쌍디귿',
      name_romanized: 'ssang-di-geut',
      pronunciation: 't*'
    },
    {
      symbol: 'ㅃ',
      name: '쌍비읍',
      name_romanized: 'ssang-bi-eup',
      pronunciation: 'p*'
    },
    {
      symbol: 'ㅆ',
      name: '쌍시옷',
      name_romanized: 'ssang-si-ot',
      pronunciation: 's*'
    },
    {
      symbol: 'ㅉ',
      name: '쌍지읒',
      name_romanized: 'ssang-ji-eut',
      pronunciation: 'dj*'
    }
  ];

  final_consonants: LetterModel[] = [
    {
      symbol: 'ㄳ',
      name: 'ㄱ',
      name_romanized: '',
      pronunciation: 'g/k'
    },
    {
      symbol: 'ㄵ',
      name: 'ㄴ',
      name_romanized: '',
      pronunciation: 'n'
    },
    {
      symbol: 'ㄶ',
      name: 'ㄴ',
      name_romanized: '',
      pronunciation: 'n'
    },
    {
      symbol: 'ㄺ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㄻ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㄼ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㄽ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㄾ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㄿ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㅀ',
      name: 'ㄹ',
      name_romanized: '',
      pronunciation: 'l'
    },
    {
      symbol: 'ㅄ',
      name: 'ㅂ',
      name_romanized: '',
      pronunciation: 'b/p'
    }
  ];

  basic_vowels: LetterModel[] = [
    {
      symbol: 'ㅏ',
      name: '아',
      name_romanized: 'a',
      pronunciation: ''
    },
    {
      symbol: 'ㅑ',
      name: '야',
      name_romanized: 'ya',
      pronunciation: ''
    },
    {
      symbol: 'ㅓ',
      name: '어',
      name_romanized: 'eo',
      pronunciation: ''
    },
    {
      symbol: 'ㅕ',
      name: '여',
      name_romanized: 'yeo',
      pronunciation: ''
    },
    {
      symbol: 'ㅗ',
      name: '오',
      name_romanized: 'o',
      pronunciation: ''
    },
    {
      symbol: 'ㅜ',
      name: '우',
      name_romanized: 'u',
      pronunciation: ''
    },
    {
      symbol: 'ㅡ',
      name: '으',
      name_romanized: 'eu',
      pronunciation: ''
    },
    {
      symbol: 'ㅣ',
      name: '이',
      name_romanized: 'i',
      pronunciation: ''
    }
  ];

  other_vowels: LetterModel[] = [
    {
      symbol: 'ㅛ',
      name: '요',
      name_romanized: 'yo',
      pronunciation: ''
    },
    {
      symbol: 'ㅘ',
      name: '와',
      name_romanized: 'wa',
      pronunciation: ''
    },
    {
      symbol: 'ㅙ',
      name: '왜',
      name_romanized: 'wae',
      pronunciation: ''
    },
    {
      symbol: 'ㅚ',
      name: '외',
      name_romanized: 'woe',
      pronunciation: ''
    },
    {
      symbol: 'ㅜ',
      name: '우',
      name_romanized: 'u',
      pronunciation: ''
    },
    {
      symbol: 'ㅝ',
      name: '워',
      name_romanized: 'wo',
      pronunciation: ''
    },
    {
      symbol: 'ㅞ',
      name: '웨',
      name_romanized: 'we',
      pronunciation: ''
    },
    {
      symbol: 'ㅟ',
      name: '위',
      name_romanized: 'wi',
      pronunciation: ''
    },
    {
      symbol: 'ㅢ',
      name: '의',
      name_romanized: 'ui',
      pronunciation: ''
    }
  ];

   // pronunciation
  basic_vowels_pronunciation: LetterModel[] = [
    {
      symbol: 'ㅏ',
      name: '',
      name_romanized: '',
      pronunciation: 'a comme dans \'chat\''
    },
    {
      symbol: 'ㅐ',
      name: '',
      name_romanized: '',
      pronunciation: 'è comme dans \'mais\' ou \'appel\''
    },
    {
      symbol: 'ㅑ',
      name: '',
      name_romanized: '',
      pronunciation: 'ya comme dans \'yack\'\n'
    },
    {
      symbol: 'ㅒ',
      name: '',
      name_romanized: '',
      pronunciation: 'yè comme dans \'Bouyei\'\n'
    },
    {
      symbol: 'ㅓ',
      name: '',
      name_romanized: '',
      pronunciation: 'eo comme dans \'botte\'\n'
    },
    {
      symbol: 'ㅔ',
      name: '',
      name_romanized: '',
      pronunciation: 'é comme dans \'blé\'\n'
    },
    {
      symbol: 'ㅕ',
      name: '',
      name_romanized: '',
      pronunciation: 'yeo comme dans \'yole\'\n'
    },
    {
      symbol: 'ㅖ',
      name: '',
      name_romanized: '',
      pronunciation: 'yé comme dans \'yéyé\'\n'
    },
    {
      symbol: 'ㅗ',
      name: '',
      name_romanized: '',
      pronunciation: 'o comme dans \'mot\'\n'
    },
    {
      symbol: 'ㅜ',
      name: '',
      name_romanized: '',
      pronunciation: 'ou comme dans \'hiboux\'\n'
    },
    {
      symbol: 'ㅡ',
      name: '',
      name_romanized: '',
      pronunciation: 'e comme dans \'cheval\'\n'
    },
    {
      symbol: 'ㅣ',
      name: '',
      name_romanized: '',
      pronunciation: 'i comme dans \'riz\'\n'
    }
  ];

  diphthongs_vowels_pronunciation: LetterModel[] = [
    {
      symbol: 'ㅘ',
      name: '',
      name_romanized: '',
      pronunciation: 'wa comme dans \'wasabi\''
    },
    {
      symbol: 'ㅙ',
      name: '',
      name_romanized: '',
      pronunciation: 'wè comme dans \'ouai\''
    },
    {
      symbol: 'ㅚ',
      name: '',
      name_romanized: '',
      pronunciation: 'woe comme dans \'fluet\' ou \'muet\''
    },
    {
      symbol: 'ㅝ',
      name: '',
      name_romanized: '',
      pronunciation: 'wo comme dans \'wok\''
    },
    {
      symbol: 'ㅞ',
      name: '',
      name_romanized: '',
      pronunciation: 'wé comme dans \'louer\''
    },
    {
      symbol: 'ㅟ',
      name: '',
      name_romanized: '',
      pronunciation: 'wi comme dans \'oui\''
    },
    {
      symbol: 'ㅢ',
      name: '',
      name_romanized: '',
      pronunciation: 'ui comme dans \'huile\' ou \'huître\''
    }
  ];

  special_consonants_pronunciation: LetterModel[] = [
    {
      symbol: 'ㄱ',
      name: '',
      name_romanized: '',
      pronunciation: 'entre k et gu,k'
    },
    {
      symbol: 'ㄷ',
      name: '',
      name_romanized: '',
      pronunciation: 'entre d et t,t'
    },
    {
      symbol: 'ㅂ',
      name: '',
      name_romanized: '',
      pronunciation: 'entre b et p,p'
    },
    {
      symbol: 'ㅈ',
      name: '',
      name_romanized: '',
      pronunciation: 'entre dj et tch,t'
    }
  ];

  consonants_pronunciation: LetterModel[] = [
    {
      symbol: 'ㄴ',
      name: '',
      name_romanized: '',
      pronunciation: 'n,n'
    },
    {
      symbol: 'ㄹ',
      name: '',
      name_romanized: '',
      pronunciation: 'entre r et l,l'
    },
    {
      symbol: 'ㅁ',
      name: '',
      name_romanized: '',
      pronunciation: 'm,m'
    },
    {
      symbol: 'ㅅ',
      name: '',
      name_romanized: '',
      pronunciation: 's / sh devantㅣㅑㅒㅕㅖㅛㅠ,t'
    },
    {
      symbol: 'ㅇ',
      name: '',
      name_romanized: '',
      pronunciation: '∅,\tng comme dans \'parking\''
    },
    {
      symbol: 'ㅊ',
      name: '',
      name_romanized: '',
      pronunciation: 'tch expiré,t'
    },
    {
      symbol: 'ㅋ',
      name: '',
      name_romanized: '',
      pronunciation: 'k expiré,k'
    },
    {
      symbol: 'ㅌ',
      name: '',
      name_romanized: '',
      pronunciation: 't expiré,t'
    },
    {
      symbol: 'ㅍ',
      name: '',
      name_romanized: '',
      pronunciation: 'p expiré,p'
    },
    {
      symbol: 'ㅎ',
      name: '',
      name_romanized: '',
      pronunciation: 'h expiré,t'
    }
  ];

  double_consonants_pronunciation: LetterModel[] = [
    {
      symbol: 'ㄲ',
      name: '',
      name_romanized: '',
      pronunciation: 'k appuyé,k'
    },
    {
      symbol: 'ㄸ',
      name: '',
      name_romanized: '',
      pronunciation: 't appuyé,/'
    },
    {
      symbol: 'ㅃ',
      name: '',
      name_romanized: '',
      pronunciation: 'p appuyé,/'
    },
    {
      symbol: 'ㅆ',
      name: '',
      name_romanized: '',
      pronunciation: 's appuyé / sh appuyé devantㅣㅑㅒㅕㅖㅛㅠ,t'
    },
    {
      symbol: 'ㅉ',
      name: '',
      name_romanized: '',
      pronunciation: 'dj appuyé,/'
    }
  ];

}

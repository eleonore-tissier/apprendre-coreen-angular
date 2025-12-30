import {Route} from "@angular/router";

export const routes: Route[] = [
  {
    path: '',
    loadComponent: () => import('./vocabulary.component').then(m => m.VocabularyComponent),
    children: [
      {
        path: 'human_beings',
        loadComponent: () => import('../../components/voc-block/voc-block.component').then(m => m.VocBlockComponent),
      },
      {
        path: 'school',
        loadComponent: () => import('../../components/voc-block/voc-block.component').then(m => m.VocBlockComponent),
      },
    ]
  }
];

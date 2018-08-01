import {Route} from '@angular/router';
import {ArticlesComponent} from './content/articles/articles.component';
import {BestArticlesComponent} from './content/best-articles/best-articles.component';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'articles',
    pathMatch: 'full'
  },
  {
    path: 'articles',
    component: ArticlesComponent
  },
  {
    path: 'best',
    component: BestArticlesComponent
  },
  {
    path: '**',
    redirectTo: 'articles'
  }
];

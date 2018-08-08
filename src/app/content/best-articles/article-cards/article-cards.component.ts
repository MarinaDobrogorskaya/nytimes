import {Component, Input, OnInit} from '@angular/core';
import {BestArticle} from '../best-article';

@Component({
  selector: 'app-article-cards',
  templateUrl: './article-cards.component.html',
  styleUrls: ['./article-cards.component.scss']
})
export class ArticleCardsComponent implements OnInit {
  @Input() articles: BestArticle[][];
  constructor() { }

  ngOnInit() {
  }

}

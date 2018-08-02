import { Component, OnInit } from '@angular/core';
import {BestArticle} from './best-article';
import {BestArtSearchService} from '../../common/services/bestart-search.service';

@Component({
  selector: 'app-best-articles',
  templateUrl: './best-articles.component.html',
  styleUrls: ['./best-articles.component.scss']
})
export class BestArticlesComponent implements OnInit {
  public articles: BestArticle[];
  constructor(private searchService: BestArtSearchService) { }
  getArticles(filters) {
    this.searchService.getBestArticles(filters.category, filters.section, filters.period).subscribe(
      articles => {
        this.articles = articles;
        console.log(articles);
      }
    );
  }
  ngOnInit() {
  }

}

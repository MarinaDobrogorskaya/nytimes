import {OnInit, Component, HostListener} from '@angular/core';
import {BestArticle} from './best-article';
import {BestArtSearchService} from '../../common/services/bestart-search.service';

@Component({
  selector: 'app-best-articles',
  templateUrl: './best-articles.component.html',
  styleUrls: ['./best-articles.component.scss']
})
export class BestArticlesComponent implements OnInit {
  public articles: BestArticle[];
  public show = false;
  constructor(private searchService: BestArtSearchService) { }
  getArticles(filters) {
    this.searchService.getBestArticles(filters.category, filters.section, filters.period).subscribe(
      articles => {
        this.articles = articles;
        console.log(articles);
      }
    );
  }
  @HostListener('window:resize', [])
  checkWidth() {
    if (document.documentElement.clientWidth >= 1200) {
      this.show = true;
    } else {
      this.show = false;
    }
  }
  ngOnInit() {
    if (document.documentElement.clientWidth <= 1000) {
      this.show = true;
    }
  }
}

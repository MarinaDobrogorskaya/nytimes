import {OnInit, Component, HostListener} from '@angular/core';
import {BestArticle} from './best-article';
import {BestArtSearchService} from '../../common/services/bestart-search.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-best-articles',
  templateUrl: './best-articles.component.html',
  styleUrls: ['./best-articles.component.scss']
})
export class BestArticlesComponent implements OnInit {
  public articles: BestArticle[];
  public sortedArticles: any;
  public inProgress = true;
  constructor(private searchService: BestArtSearchService) { }
  getArticles(filters) {
    this.inProgress = true;
    this.searchService.getBestArticles(filters.category, filters.section, filters.period)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe(
      articles => {
        this.articles = articles;
        this.countColumns();
        console.log(articles);
      }
    );
  }
  @HostListener('window:resize', [])
  checkWidth() {
    this.countColumns();
  }
  ngOnInit() {
  }
  private distributeCards (articles: BestArticle[], cols: number): BestArticle[][] {
    const result = [];
    for (let i = 0; i < cols; i++) {
      result[i] = [];
    }
    for (let i = 0; i < articles.length; i++) {
      const colIndex = i % cols;
      result[colIndex].push(articles[i]);
    }
    console.log('Distributed cards ', result);
    return result;
  }
  countColumns () {
    const d = document.documentElement.clientWidth;
    if (d <= 464) {
      this.sortedArticles = this.distributeCards(this.articles, 1);
      return 1;
    } else if (d <= 896 && d > 464) {
      this.sortedArticles = this.distributeCards(this.articles, 2);
      return 2;
    } else if (d > 896 && d <= 1328) {
      this.sortedArticles = this.distributeCards(this.articles, 3);
      return 3;
    } else if (d > 1328 && d <= 2160) {
      this.sortedArticles = this.distributeCards(this.articles, 4);
      return 4;
    } else if (d > 2160) {
      this.sortedArticles = this.distributeCards(this.articles, 5);
      return 5;
    }
  }
}

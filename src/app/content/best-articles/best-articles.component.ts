import {OnInit, Component, HostListener} from '@angular/core';
import {BestArticle} from './best-article';
import {BestArtSearchService} from './bestart-search.service';
import {finalize} from 'rxjs/operators';

@Component({
  selector: 'app-best-articles',
  templateUrl: './best-articles.component.html',
  styleUrls: ['./best-articles.component.scss']
})
export class BestArticlesComponent implements OnInit {
  private TAG = 'BestArticlesComponent >';
  public articles: BestArticle[];
  public sortedArticles: BestArticle[][];
  public inProgress = true;
  constructor(private searchService: BestArtSearchService) { }
  getArticles(filters) {
    this.inProgress = true;
    this.searchService.getBestArticles(filters.category, filters.section, filters.period)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe(
      articles => {
        this.articles = articles;
        this.recountColumns();
        console.log(`${this.TAG} onSearchArticles: articles - `, articles);
      }
    );
  }
  @HostListener('window:resize', [])
  onWindowResize() {
    this.recountColumns();
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
    console.log(`${this.TAG} distributeCards: result - `, result);
    return result;
  }
  recountColumns (): void {
    let d = document.documentElement.clientWidth;
    const maxCardWidth = 400;
    const indent = 8;
    d -= indent * 2; // minus lateral indents
    const numOfCols = Math.ceil(d / (maxCardWidth + indent * 2));
    this.sortedArticles = this.distributeCards(this.articles, numOfCols);
  }
}

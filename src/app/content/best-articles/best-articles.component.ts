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
  countColumns (): void {
    let d = document.documentElement.clientWidth;
    d -= 8 * 2; // minus lateral indents
    const numOfCols = Math.ceil(d / (400 + 16));
    this.sortedArticles = this.distributeCards(this.articles, numOfCols);
  }
}

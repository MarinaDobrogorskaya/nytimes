import {Component,  HostListener, OnInit} from '@angular/core';
import {ArticlesSearchService} from './articles-search.service';
import {finalize} from 'rxjs/operators';
import {Article} from './article';
import {Search} from './search/search-events';
import {ScrollUtils, FormatUtils} from '../../common/utils/utils';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesSearchService]
})
export class ArticlesComponent implements OnInit {
  private TAG = 'ArticlesComponent >';
  private pageNum = 0;
  public criteria: Criteria = {
    sort: 'newest'
  };
  public inProgress = false;
  public articles: Article[];
  constructor(private search: ArticlesSearchService) { }
  ngOnInit() {
    this.inProgress = true;
    this.search.getArticles('0', this.criteria)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe(
        articles => {
          this.articles = articles;
        }
      );
  }
  @HostListener('window:scroll', [])
  onCreateNewPage() {
    if (ScrollUtils.isEnd()) {
      this.inProgress = true;
      this.pageNum++;
      console.log(`${this.TAG} createNewPage: this.pageNum - ${this.pageNum}`);
      this.search
        .getArticles(this.pageNum, this.criteria)
        .pipe(finalize(() => this.inProgress = false))
        .subscribe(
          articles => {
            this.articles = this.articles.concat(articles);
          }
        );
    }
  }
  private changeAcquiredData(obj: Search): void {
    this.criteria.fq = '';
    if (obj.sort) {
      this.criteria.sort = obj.sort;
    }
    if (obj.query) {
      this.criteria.fq += 'headline.search: ' + obj.query;
    }
    if (obj.section) {
      this.criteria.fq.length !== 0
        ? this.criteria.fq += 'AND section_name: ' + obj.section
        : this.criteria.fq +=  'section_name: ' + obj.section;
    }
    if (obj.type) {
      this.criteria.fq.length !== 0
        ? this.criteria.fq += 'AND type_of_material: ' + obj.type
        : this.criteria.fq +=  'type_of_material: ' + obj.type;
    }
    if (obj.dateFrom) {
      this.criteria.dateFrom = FormatUtils.dateToSql(obj.dateFrom);
    }
    if (obj.dateTo) {
      this.criteria.dateTo = FormatUtils.dateToSql(obj.dateTo);
    }
  }

  onSearchArticles(obj: Search) {
    this.inProgress = true;
    this.pageNum = 0;
    this.changeAcquiredData(obj);
    this.search.getArticles(this.pageNum, this.criteria)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe(articles => this.articles = articles);
  }
}
interface Criteria {
  fq?: string;
  sort?: string;
  dateFrom?: string;
  dateTo?: string;
}

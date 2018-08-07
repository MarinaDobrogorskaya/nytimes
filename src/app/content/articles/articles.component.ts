import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';
import {ArticlesSearchService} from '../../common/services/articles-search.service';
import {finalize} from 'rxjs/operators';
import {Article} from './article';
import {EndPageService} from '../../common/services/end-page.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [ArticlesSearchService, EndPageService]
})
export class ArticlesComponent implements OnInit {
  public pageNum = 0;
  public criteria: any = {
    sort: 'newest'
  };
  @Output() inProgress = new EventEmitter<boolean>();
  public articles: Article[];
  constructor(private search: ArticlesSearchService,
              private page: EndPageService) { }
  ngOnInit() {
    this.inProgress.emit(true);
    this.search.getArticles('0', this.criteria)
      .pipe(finalize(() => this.inProgress.emit(false)))
      .subscribe(
        articles => {
          this.articles = articles;
        }
      );
  }
  @HostListener('window:scroll', [])
  newPage() {
    if (this.page.isEnd()) {
      this.inProgress.emit(true);
      this.pageNum++;
      console.log(this.pageNum);
      this.search
        .getArticles(this.pageNum, this.criteria)
        .pipe(finalize(() => this.inProgress.emit(false)))
        .subscribe(
          articles => {
            this.articles = this.articles.concat(articles);
          }
        );
    }
  }
  private getStringDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}-${(month < 10) ? '0' + month : month}-${(day < 10) ? '0' + day : day}`;
  }
  private changeAcquiredData(obj): void {
    this.criteria.fq = '';
    this.criteria.sort = obj.sort;
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
      this.criteria.dateFrom = this.getStringDate(obj.dateFrom);
    }
    if (obj.dateTo) {
      this.criteria.dateTo = this.getStringDate(obj.dateTo);
    }
  }

  getArticles(obj) {
    this.inProgress.emit(true);
    this.pageNum = 0;
    this.changeAcquiredData(obj);
    this.search.getArticles(this.page, this.criteria)
      .pipe(finalize(() => this.inProgress.emit(false)))
      .subscribe(articles => this.articles = articles);
  }
}

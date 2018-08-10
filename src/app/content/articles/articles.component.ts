import {Component,  HostListener, OnInit} from '@angular/core';
import {ArticlesSearchService} from '../../common/services/articles-search.service';
import {finalize} from 'rxjs/operators';
import {Article} from './article';
import {EndPageService} from '../../common/services/end-page.service';
import {ScrollUtils, FormatUtils} from '../../common/utils/utils';

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
  createNewPage() {
    if (ScrollUtils.isEnd()) {
      this.inProgress = true;
      this.pageNum++;
      console.log(this.pageNum);
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
  private changeAcquiredData(obj): void {
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

  getArticles(obj) {
    this.inProgress = true;
    this.pageNum = 0;
    this.changeAcquiredData(obj);
    this.search.getArticles(this.pageNum, this.criteria)
      .pipe(finalize(() => this.inProgress = false))
      .subscribe(articles => this.articles = articles);
  }
}

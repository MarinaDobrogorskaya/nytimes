import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from '../../content/articles/article';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable()
export class ArticlesSearchService {
  public url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';

  constructor(private http: HttpClient) { }
  getArticles(page, criteria?): Observable<Article[]> {
    let options = {
      params: new HttpParams()
        .set('api-key', '585897e1567c46de9fb109685a617fd9')
        .set('page', page)
        .set('sort', criteria.sort)
    };

    if (criteria.fq) {
      options.params = options.params.set('fq', criteria.fq);
    }
    if (criteria.from) {
      options.params = options.params.set('begin_date', criteria.from);
    }
    if (criteria.to) {
      options.params = options.params.set('end_date', criteria.to);
    }

    return this.http.get<any>(this.url, options).pipe(map(obj => {
      const articles = obj['response']['docs'];
      return articles.map(article => {
        return {
          headline: article.headline.main,
          snippet: article.snippet,
          web_url: article.web_url,
          pub_date: article.pub_date,
          section: article.section_name
        };
      });
    }));
  }
}

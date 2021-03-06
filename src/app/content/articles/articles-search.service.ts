import {Injectable} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Article } from './article';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {A_URL, API_KEY} from '../../constants';

@Injectable()
export class ArticlesSearchService {
  private url = A_URL;
  constructor(private http: HttpClient) {}
  getArticles(page, criteria?): Observable<Article[]> {
    console.log('Articles will be search by criteria: ', criteria);
    const options = {
      params: new HttpParams()
        .set('api-key', API_KEY)
        .set('page', page)
    };
    if (criteria.sort) {
      options.params = options.params.set('sort', criteria.sort);
    }
    if (criteria.fq) {
      options.params = options.params.set('fq', criteria.fq);
    }
    if (criteria.from) {
      options.params = options.params.set('begin_date', criteria.from);
    }
    if (criteria.to) {
      options.params = options.params.set('end_date', criteria.to);
    }
    console.log('HTTP options: ', options);
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

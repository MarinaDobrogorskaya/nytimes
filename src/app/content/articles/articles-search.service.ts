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
    const options = {
      params: new HttpParams()
        .set('api-key', API_KEY)
        .set('page', page)
    };
    ['sort', 'fg', 'from', 'to'].forEach(propName => {
      if (criteria[propName]) {
        options.params = options.params.set(propName, criteria[propName]);
        }
    });
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

import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BestArticle} from '../../content/best-articles/best-article';

@Injectable({
  providedIn: 'root'
})
export class BestArtSearchService {
  public url: string;
  constructor(private http: HttpClient) { }
  getBestArticles(category, section, period): Observable<BestArticle[]> {
    this.url = 'https://api.nytimes.com/svc/mostpopular/v2/';
    const imgNum = category === 'mostviewed' && section === 'all-sections' ? 3 : 2;
    const options = {
      params: new HttpParams()
        .set('api-key', '585897e1567c46de9fb109685a617fd9')
    };
    this.url += category + '/' + section + '/' + period + '.json';
    console.log(this.url);
    return this.http.get<any>(this.url, options).pipe(map(obj => {
      const articles = obj['results'];
      return articles.map(article => {
        const img = article.media[0]['media-metadata'].length > 2 ? article.media[0]['media-metadata'][imgNum].url : undefined;
        return {
          title: article.title,
          description: article.abstract,
          url: article.url,
          published:  article.published_date,
          img: img
        };
      });
    }));
  }
}


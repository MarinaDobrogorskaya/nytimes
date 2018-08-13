import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BestArticle} from './best-article';
import {API_KEY, BA_ULR} from '../../constants';

@Injectable({
  providedIn: 'root'
})
export class BestArtSearchService {
  private url = BA_ULR;
  private TAG = 'BestArtSearchService >';
  constructor(private http: HttpClient) { }
  getBestArticles(category, section, period): Observable<BestArticle[]> {
    const _url = `${this.url + category}/${section}/${period}.json`;
    const imgNum = category === 'mostviewed' && section === 'all-sections' ? 3 : 2;
    const options = {
      params: new HttpParams()
        .set('api-key', API_KEY)
    };
    console.log(`${this.TAG} getBestArticles: _url - ${_url}`);
    return this.http.get<Response>(_url, options).pipe(map(obj => {
      const articles = obj['results'];
      return articles.map(article => {
        const img = article.media[0]['media-metadata'].length > 2
          ? article.media[0]['media-metadata'][imgNum].url
          : undefined;
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
interface Response {
  result: BestArticle[];
}

import { Injectable, inject } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Article, NewsResponse } from '../Interfaces/news-response';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private http = inject(HttpClient);

  getTopHeadLiners(): Observable<Article[]>{
   
    return this.http.get<NewsResponse>('https://newsapi.org/v2/everything?q=tesla&from=2024-04-11&sortBy=publishedAt&apiKey=754adfe164c6487bafccdeb44b70c170')
    .pipe(
      map(({articles}) => articles)
    );
  }
}

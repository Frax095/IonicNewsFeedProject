import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TopHeadline {
  articles: [Article?];
}

export interface Article {
  title: String;
  description: String;
  urlToImage: String;
  url: String;
  content: String;
}

@Injectable({
  providedIn: 'root'
})

export class FeedService {
  public apiUrl = 'https://newsapi.org/v2/top-headlines?country=it&apiKey=ae87e4b055694f5da5beb005a373b483';
  constructor(public httpClient: HttpClient) { }
  public all(): Promise<TopHeadline> {
    return this.httpClient.get<TopHeadline>(this.apiUrl).toPromise();
  }
}

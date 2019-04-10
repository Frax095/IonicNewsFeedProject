import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface TopHeadline {
  articles: [Article?];
}

export interface Article {
  source: { name: string; }
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
  

  constructor(public httpClient: HttpClient) { }

  public urlAllCategory = 'https://newsapi.org/v2/top-headlines?country=it&apiKey=ae87e4b055694f5da5beb005a373b483';
  public all(): Promise<TopHeadline> {
    return this.httpClient.get<TopHeadline>(this.urlAllCategory).toPromise();
  }
  
  private category: string;
  public urlCategory1 = 'https://newsapi.org/v2/top-headlines?country=it&category=';
  public urlCategory2 = '&apiKey=ae87e4b055694f5da5beb005a373b483';
  public getByCategory(): Promise<TopHeadline> {
    return this.httpClient.get<TopHeadline>(`${this.urlCategory1}${this.category}${this.urlCategory2}`).toPromise();
  }

  getCategory(): string {
    return this.category;
  }

  setCategory(category: string) {
    this.category = category;
  }

  private q: string;
  public urlQ1 = 'https://newsapi.org/v2/top-headlines?country=it&q=';
  public urlQ2 = '&apiKey=ae87e4b055694f5da5beb005a373b483';
  public getByQ(): Promise<TopHeadline> {
    return this.httpClient.get<TopHeadline>(`${this.urlQ1}${this.q}${this.urlQ2}`).toPromise();
  }

  getQ(): string {
    return this.q;
  }

  setQ(q: string) {
    this.q = q;
  }
}

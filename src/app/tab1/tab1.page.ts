import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from '../feed.service';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  public topHeadline: TopHeadline = {
    articles: []
  }
  public category: string;
  public q: string;

  constructor(public feedService: FeedService, public iab: InAppBrowser) {}

  ngOnInit(){
    this.q = this.feedService.getQ();
    this.category = this.feedService.getCategory();
    this.feedService.all().then(response => {
      this.topHeadline = response;
    });
  }

  set(category: string){
    category = this.category
    this.feedService.setCategory(category);
    console.log(category);
  }

  setMagicWord(){
    this.feedService.setQ(this.q);
    console.log(this.q)
  }

  openIab(url: string){
    const option: InAppBrowserOptions = {
      toolbar: 'yes',
      location: 'yes'
    }
    this.iab.create(url, '_self', option);
  }
}
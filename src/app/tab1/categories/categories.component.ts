import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from 'src/app/feed.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})

export class CategoriesComponent implements OnInit {
  public topHeadline: TopHeadline = {
    articles: []
  }
  public category

  constructor(public feedService: FeedService, public iab: InAppBrowser) { }

  ngOnInit() {
    this.category = this.feedService.getCategory();
    this.feedService.getByCategory().then(response => {
      this.topHeadline = response;
    });
  }

  openIab(url: string){
    const option: InAppBrowserOptions = {
      toolbar: 'yes',
      location: 'yes'
    }
    this.iab.create(url, '_self', option);
  }
  
}

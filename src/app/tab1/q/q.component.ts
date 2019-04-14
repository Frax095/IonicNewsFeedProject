import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from 'src/app/feed.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx'

@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.scss'],
})

export class QComponent implements OnInit {
  public topHeadline: TopHeadline = {
    articles: []
  }
  public q: string;

  constructor(public feedService: FeedService, public iab: InAppBrowser) { }

  ngOnInit() {
    this.q = this.feedService.getQ();
    this.feedService.getByQ().then(response => {
      this.topHeadline = response;
      console.log("ciao")
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

import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from 'src/app/feed.service';

@Component({
  selector: 'app-q',
  templateUrl: './q.component.html',
  styleUrls: ['./q.component.scss'],
})

export class QComponent implements OnInit {
  public topHeadline: TopHeadline = {
    articles: []
  }
  public q

  constructor(public feedService: FeedService) { }

  ngOnInit() {
    this.q = this.feedService.getQ();
    this.feedService.getByQ().then(response => {
      this.topHeadline = response;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from '../feed.service';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from './popover/popover.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  public topHeadline: TopHeadline = {
    articles: []
  }

  constructor(public feedService: FeedService, public popoverController: PopoverController){}

  ngOnInit(){
    this.feedService.all().then(response => {
      this.topHeadline = response;
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverComponent,
      event: ev,
      translucent: true
    });
    return await popover.present();
  }

}

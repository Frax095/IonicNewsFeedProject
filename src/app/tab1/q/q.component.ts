import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from 'src/app/feed.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx'
import { ToastController } from '@ionic/angular';

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

  constructor(public feedService: FeedService, public iab: InAppBrowser, public toastController: ToastController) { }

  ngOnInit() {
    this.q = this.feedService.getQ();
    this.feedService.getByQ().then(response => {
      this.topHeadline = response;
      this.resultOfSearch();
    });
  }

  openIab(url: string){
    const option: InAppBrowserOptions = {
      toolbar: 'yes',
      location: 'yes'
    }
    this.iab.create(url, '_self', option);
  }

  resultOfSearch(){
    if(this.topHeadline.articles.length == 0){
      this.presentToast(`la ricerca ${this.q} non ha prodotto risultati`);
    } if (this.topHeadline.articles.length > 0) {
      this.presentToast(`Ci sono ${this.topHeadline.articles.length} contenuti`);
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 3000
    });
    toast.present();
  }
}

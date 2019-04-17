import { Component, OnInit } from '@angular/core';
import { FeedService, TopHeadline } from 'src/app/feed.service';
import {InAppBrowser, InAppBrowserOptions} from '@ionic-native/in-app-browser/ngx'
import { ToastController } from '@ionic/angular';

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

  constructor(public feedService: FeedService, public iab: InAppBrowser, public toastController: ToastController) { }

  ngOnInit() {
    this.category = this.feedService.getCategory();
    this.feedService.getByCategory().then(response => {
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
      this.presentToast(`la ricerca ${this.category} non ha prodotto risultati`);
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

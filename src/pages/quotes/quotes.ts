import { Component, OnInit } from '@angular/core';
import { NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit  {
  quoteGroup: { category: string, quotes: Quote[], icon: string };
  constructor(private navParams: NavParams, private alertCtrl: AlertController) {}

  //ionViewDidLoad() {
  //  this.quoteGroup = this.navParams.data;    
  //}

  ngOnInit() {
    this.quoteGroup = this.navParams.data;
  }

  onAddFavourite(selectedQuote: Quote) {
    const alert =  this.alertCtrl.create({
      title: 'Add Quote',
      subTitle: 'Are you sure you want to favourite this quote?',
      buttons: [
        {
          text: 'Yes, go ahead',
          handler: () => {
            console.log('Ok');
          }
        },
        {
          text: 'No',
          role: 'cancel',
          handler: () => {
            console.log('Cancelled!');
          }
        }
      ]
    });

    alert.present();

  }

}

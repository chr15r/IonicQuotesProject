import { Component } from "@angular/core";
import { ViewController, NavParams } from "ionic-angular";

@Component({
  selector: "page-quote",
  templateUrl: "quote.html"
})
export class QuotePage {
  person: string;
  text: string;

  constructor(private viewCtrl: ViewController, private navParams: NavParams) {}

  ionViewDidLoad() {
    //ionViewDidLoad - When page was created
    this.person = this.navParams.get("person");
    this.text = this.navParams.get("text");
  }

  onClose(remove = false) {
    // View Controller controls what is visible
    this.viewCtrl.dismiss(remove);
  }
}

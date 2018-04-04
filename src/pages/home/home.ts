import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { QuestionsPage } from '../questions/questions';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  selectUser(user) {
    this.navCtrl.push(QuestionsPage, { user: user });
  }
}

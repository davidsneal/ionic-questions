import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import Questions from '../../data/questions';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  questions: Array<{question: any}>;
  user: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // set vars
    this.questions = [];
    this.user = this.navParams.get('user');

    // loop through 5 times
    for (let i = 0; i < 5; i++) {
      // pick a random question
      var question = Questions[this.user][Math.floor(Math.random() * Questions[this.user].length)];

      // add it to the questions array
      this.questions.push(question);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }
}

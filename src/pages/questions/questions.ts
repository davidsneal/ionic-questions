import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';

import Questions from '../../data/questions';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage {
  questions: Array<{question: any}>;
  user: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private tts: TextToSpeech
  ) {
    // set vars
    this.questions = [];
    this.user = this.navParams.get('user');

    this.test();

    // loop through 5 times
    for (let i = 0; i < 5; i++) {
      // pick a random question
      var question = Questions[this.user][Math.floor(Math.random() * Questions[this.user].length)];

      // add it to the questions array
      this.questions.push(question);
    }
  }

  async test():Promise<any> {
    await this.tts.speak('Hello World');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionsPage');
  }
}

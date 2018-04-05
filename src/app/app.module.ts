import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TextToSpeech } from '@ionic-native/text-to-speech';

import { HomePage } from '../pages/home/home';
import { QuestionsPage } from '../pages/questions/questions';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QuestionsProvider } from '../providers/questions/questions';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuestionsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuestionsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    TextToSpeech,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QuestionsProvider
  ]
})
export class AppModule {}

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, ActionSheet } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CheckboxPage } from '../pages/checkbox/checkbox';
import { DatetimePage } from './../pages/datetime/datetime';
import { RangePage } from './../pages/range/range';
import { RadioPage } from './../pages/radio/radio';
import { CardPage } from './../pages/card/card';
import { ButtonPage } from './../pages/button/button';
import { BadgesPage } from './../pages/badges/badges';
import { AlertPage } from './../pages/alert/alert';
import { ActionSheetPage } from './../pages/action-sheet/action-sheet';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ActionSheetPage,
    AlertPage,
    BadgesPage,
    ButtonPage,
    CardPage,
    CheckboxPage,
    RadioPage,
    RangePage,
    DatetimePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

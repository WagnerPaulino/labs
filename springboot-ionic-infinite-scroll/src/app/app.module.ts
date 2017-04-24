import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InfiniteScrollModule } from 'angular2-infinite-scroll';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MyApp } from './app.component';
import { Home } from '../pages/home';
import { MessageService } from "../services/message.service";
import { List } from "../pages/message/list"



@NgModule({
  declarations: [
    MyApp,
    Home,
    List
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    InfiniteScrollModule
  ],
  bootstrap: [IonicApp],  
  entryComponents: [
    MyApp,
    Home
  ],
  providers: [
    MessageService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

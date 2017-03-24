import { Component, ViewChild, OnInit } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HomePage } from "../pessoa/pages/home/home";

@Component({
  templateUrl: 'app.html'
})
export class MyApp implements OnInit{
  rootPage = HomePage;
  @ViewChild('myNav') navCtrl: NavController
  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  ngOnInit(){
    this.navCtrl.push(HomePage);
  }
}

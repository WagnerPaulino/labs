
import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class Home {
 @ViewChild('myNav') navCtrl: NavController;

}
import { Component, ViewChild } from '@angular/core';

import { NavController } from 'ionic-angular';
import { EditarPage } from "../edit/editar";
import { ListaPage } from "../list/lista";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 @ViewChild('myNav') navCtrl: NavController;
  constructor() {}
   
   editPage(){
    this.navCtrl.push('page-edit');
  }
  listPage(){
    this.navCtrl.push('page-contact');
  }

}

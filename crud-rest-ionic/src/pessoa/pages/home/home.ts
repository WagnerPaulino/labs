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

  constructor(public nav : NavController) {}
   
   editPage(){
    //this.viewCtrl.dismiss();
    //this.appCtrl.getRootNav().push(EditarPage);
    this.nav.push(EditarPage);
  }
  listPage(){
    //this.viewCtrl.dismiss();
    //this.appCtrl.getRootNav().push(ListaPage);
    this.nav.push(ListaPage);
  }

}

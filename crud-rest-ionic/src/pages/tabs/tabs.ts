import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EditarPage } from '../edit/editar';
import { ListaPage } from '../list/lista';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = EditarPage;
  tab3Root: any = ListaPage;

  constructor() {

  }
}

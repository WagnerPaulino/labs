import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { EditarPage } from "../pessoa/pages/edit/editar";
import { ListaPage } from "../pessoa/pages/list/lista";
import { HomePage } from "../pessoa/pages/home/home";
import { PessoaService } from "../services/pessoaService";


@NgModule({
  declarations: [
    MyApp,
    EditarPage,
    ListaPage,
    HomePage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditarPage,
    ListaPage,
    HomePage
  ],
  providers: [ PessoaService, {provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}

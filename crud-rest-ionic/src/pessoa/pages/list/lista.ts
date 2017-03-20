import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";

@Component({
  selector: 'page-contact',
  templateUrl: 'lista.html'
})
export class ListaPage {
  private pessoas : Pessoa[];

  constructor(public navCtrl: NavController, pessoaService: PessoaService) {
    pessoaService.getPessoas().subscribe(data => this.pessoas = data);
  }

}

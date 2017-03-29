import { Component, ViewChild } from '@angular/core';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";
import { NavController } from "ionic-angular";

@Component({
  selector: 'page-contact',
  templateUrl: 'lista.html'
})
export class ListaPage {
  @ViewChild('page-contact') navCtrl: NavController
  private pessoas : Pessoa[] = [];

  private pessoaService: PessoaService;

  constructor(pessoaService: PessoaService) {
    pessoaService.getPessoas().subscribe(data => this.pessoas = data);
  }

}

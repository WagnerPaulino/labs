import { Component, ViewChild } from '@angular/core';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";
import { NavController } from "ionic-angular";
import { EditarPage } from "../edit/editar";

@Component({
  selector: 'page-contact',
  templateUrl: 'lista.html'
})
export class ListaPage {
  private pessoas : Pessoa[] = [];

  constructor(public pessoaService: PessoaService, public nav : NavController) {
    pessoaService.getPessoas().subscribe(data => this.pessoas = data);
  }
  edit(pessoa: Pessoa){
    this.nav.push(EditarPage, {pessoa})
  }

  delete(id){
    console.log(id)
  this.pessoaService.deletePessoa(id).subscribe(id);
  this.nav.pop();
  this.nav.push(ListaPage);
  }

}

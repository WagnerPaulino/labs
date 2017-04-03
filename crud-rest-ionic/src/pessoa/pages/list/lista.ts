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

  delete(pessoa: Pessoa){
    let id: any = pessoa.id;
    console.log(id)
  this.pessoaService.deletePessoa(id).then(id);
   for(let i in this.pessoas){
      if(this.pessoas[i].id == id){
        this.pessoas.splice(parseInt(i), 1);
      }
}
  }

}

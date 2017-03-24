import { Component } from '@angular/core';
import { Pessoa } from "../../../domain/pessoa";
import { PessoaService } from "../../../services/pessoaService";

@Component({
  selector: 'page-contact',
  templateUrl: 'lista.html'
})
export class ListaPage {
  private pessoas : Pessoa[] = [];

  private pessoaService: PessoaService;

  constructor(pessoaService: PessoaService) {
    pessoaService.getPessoas().subscribe(data => this.pessoas = data);
  }

}

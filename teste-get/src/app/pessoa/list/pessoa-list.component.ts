import { Component, OnInit } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ITdDataTableColumn } from '@covalent/core'


import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl:  './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  private pessoas: Pessoa[] = [];

  ngOnInit() {

  }

  constructor(private pessoaService: PessoaService) {
    this.pessoaService.getPessoas()
      .subscribe(data => this.pessoas = data);
  }
  delete(form: NgForm) {
      this.pessoaService.deletePessoa(form.value.id)
  }

  edit(form: NgForm) {
      this.pessoaService.updatePessoa(form.value)
  }

  private columns: ITdDataTableColumn[] = [
    { name: 'nome', label: 'Nome' },
    { name: 'tipo', label: 'Tipo'}
  ];

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm, Validators, FormBuilder, FormControl } from '@angular/forms';
import { ITdDataTableColumn } from '@covalent/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl:  './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit, OnDestroy {

  private pessoas: Pessoa[] = [];

  ngOnInit() {
    this.route.params
    .map(params => params['id'])
    .switchMap(id => this.pessoaService.deletePessoa(id))
    .subscribe(pessoa => this.pessoas);
    this.router.navigate(['pessoa-list']);
  }

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router:Router) {
    this.pessoaService.getPessoas()
      .subscribe(data => this.pessoas = data);
  }
  delete(id) {
      this.pessoaService.deletePessoa(id);
  }

  edit(form: NgForm) {
      this.pessoaService.updatePessoa(form.value)
  }

  private columns: ITdDataTableColumn[] = [
    { name: 'nome', label: 'Nome' },
    { name: 'tipo', label: 'Tipo'}
  ];


  ngOnDestroy(){
    this.pessoas = [];
  }
}

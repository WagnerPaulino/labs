import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
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
export class PessoaListComponent implements OnInit, OnDestroy{

  private pessoas: any[] = [];

  ngOnInit() {
   
  }

  constructor(private pessoaService: PessoaService, private route: ActivatedRoute, private router:Router) {
    this.pessoaService.getPessoas()
      .subscribe(data => this.pessoas = data);
  }
  delete(id) {
      console.log(this.pessoas);
    console.log("Executando delete",id);
    this.pessoaService.deletePessoa(id).subscribe(id => id);
    for(let i in this.pessoas){
      if(this.pessoas[i].id == id){
        this.pessoas.splice(parseInt(i), 1);
      }
    }
  }

  edit(form: NgForm) {
      this.pessoaService.updatePessoa(form.value)
  }

  teste(){
    console.log("executei o onclick");
  }


  private columns: ITdDataTableColumn[] = [
    { name: 'nome', label: 'Nome' },
    { name: 'tipo', label: 'Tipo'}
  ];


  ngOnDestroy(){
    this.pessoas = [];
  }
}

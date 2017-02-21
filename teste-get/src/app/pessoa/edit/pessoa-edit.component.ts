import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core'

@Component({
  selector: 'app-pessoa',
  templateUrl:  './pessoa-edit.component.html',
  styleUrls: ['./pessoa-edit.component.css']
})
export class PessoaEditComponent implements OnInit {

  private pessoas: Pessoa[] = [];

  ngOnInit() {

  }

  constructor(private pessoaService: PessoaService) {
    this.pessoaService.getPessoas()
      .subscribe(data => this.pessoas = data);
  }
}

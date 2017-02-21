import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core'

@Component({
  selector: 'app-pessoa',
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
}

import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'app/domain/pessoa';
import { PessoaService } from 'app/service/pessoa.service';
import { ITdDataTableColumn } from '@covalent/core'

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
  deletePessoa(pessoa) {
    if (confirm("Você quer deletar " + pessoa.nome + "?")) {
      var index = this.pessoas.indexOf(pessoa);
      this.pessoas.splice(index, 1);

      this.pessoaService.deletePessoa(pessoa.id)
        .subscribe(null, err => {
          alert("Não foi possivel deletar");
          this.pessoas.splice(index, 0, pessoa);
        });
    }
  }

  private columns: ITdDataTableColumn[] = [
    { name: 'nome', label: 'Nome' },
    { name: 'tipo', label: 'Tipo'}
  ];

}